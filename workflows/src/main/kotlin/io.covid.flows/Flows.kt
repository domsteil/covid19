package io.covid


import net.corda.core.contracts.*
import net.corda.core.crypto.SecureHash
import net.corda.core.flows.*
import net.corda.core.identity.Party
import net.corda.core.node.ServiceHub
import net.corda.core.node.services.Vault
import net.corda.core.node.services.queryBy
import net.corda.core.node.services.vault.QueryCriteria
import net.corda.core.serialization.CordaSerializable
import net.corda.core.transactions.SignedTransaction
import net.corda.core.transactions.TransactionBuilder
import net.corda.core.utilities.OpaqueBytes
import net.corda.core.utilities.ProgressTracker
import java.io.File
import java.io.InputStream
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.format.FormatStyle
import java.util.*
import co.paralleluniverse.fibers.Suspendable
import io.covid.message.Message
import io.covid.message.MessageContract.Companion.MESSAGE_CONTRACT_ID
import io.covid.message.MessageContract
import io.covid.contact.Contact
import io.covid.contact.ContactContract
import io.covid.contact.ContactContract.Companion.CONTACT_CONTRACT_ID
import io.covid.case.Case
import io.covid.case.CaseContract.Companion.CASE_CONTRACT_ID



// *********
// * Create Patient Flow *
// *********

object CreatePatientFlow {
    @InitiatingFlow
    @StartableByRPC
    class Controller(val patientId: String,
                     val firstName: String,
                     val lastName: String,
                     val sex: Sex,
                     val age: Int,
                     val email: String,
                     val phone: String,
                     val processor: Party) : FlowLogic<SignedTransaction>() {

        companion object {
            object GENERATING_TRANSACTION : ProgressTracker.Step("Generating transaction based on new Trade.")
            object VERIFYING_TRANSACTION : ProgressTracker.Step("Verifying contract constraints.")
            object SIGNING_TRANSACTION : ProgressTracker.Step("Signing transaction with our private key.")
            object GATHERING_SIGS : ProgressTracker.Step("Gathering the counterparty's signature.") {
                override fun childProgressTracker() = CollectSignaturesFlow.tracker()
            }

            object FINALISING_TRANSACTION : ProgressTracker.Step("Obtaining notary signature and recording transaction.") {
                override fun childProgressTracker() = FinalityFlow.tracker()
            }

            fun tracker() = ProgressTracker(
                GENERATING_TRANSACTION,
                VERIFYING_TRANSACTION,
                SIGNING_TRANSACTION,
                GATHERING_SIGS,
                FINALISING_TRANSACTION
            )
        }

        override val progressTracker = tracker()

        @Suspendable
        override fun call(): SignedTransaction {
            // Obtain a reference to the notary we want to use.
            val notary = serviceHub.networkMapCache.notaryIdentities[0]

            // Stage 1.
            progressTracker.currentStep = GENERATING_TRANSACTION

            // Generate an unsigned transaction.
            val patientState = Patient(patientId, firstName, lastName, sex, age, email, phone, serviceHub.myInfo.legalIdentities.first(), processor)
            val txCommand = Command(PatientContract.Commands.CreatePatient(), patientState.participants.map { it.owningKey })
            val txBuilder = TransactionBuilder(notary = notary)
            txBuilder.addOutputState(patientState, Patient_CONTRACT_ID)
            txBuilder.addCommand(txCommand)

            val partSignedTx = serviceHub.signInitialTransaction(txBuilder)


            val otherPartyFlow = initiateFlow(processor)
            val fullySignedTx = subFlow(CollectSignaturesFlow(partSignedTx, setOf(otherPartyFlow), GATHERING_SIGS.childProgressTracker()))

            // Finalising the transaction.
            return subFlow(FinalityFlow(fullySignedTx, listOf(otherPartyFlow)))
        }
    }


    @InitiatedBy(Controller::class)
    class Processor(val otherPartySession: FlowSession) : FlowLogic<SignedTransaction>() {
        @Suspendable
        override fun call(): SignedTransaction {
            val signTransactionFlow = object : SignTransactionFlow(otherPartySession) {
                override fun checkTransaction(stx: SignedTransaction) = requireThat {
                    val output = stx.tx.outputs.single().data
                    "This must be an Patient transaction." using (output is Patient)
                }
            }

            val txId = subFlow(signTransactionFlow).id

            return subFlow(ReceiveFinalityFlow(otherPartySession, expectedTxId = txId))
        }
    }
}


// *********
// * Create Case  Flow *
// *********

object CreateCaseFlow {
    @InitiatingFlow
    @StartableByRPC
    @CordaSerializable
    class Initiator(val caseId: String,
                    val caseName: String,
                    val caseNumber: String,
                    val summary: String,
                    val location: String,
                    val country: String,
                    val latitude: String,
                    val longitude: String,
                    val date: String,
                    val caseStatus: CaseStatus,
                    val casePriority: CasePriority,
                    val resolver: Party) : FlowLogic<SignedTransaction>() {

        companion object {
            object GENERATING_TRANSACTION : ProgressTracker.Step("Generating transaction.")
            object VERIFYING_TRANSACTION : ProgressTracker.Step("Verifying contract constraints.")
            object SIGNING_TRANSACTION : ProgressTracker.Step("Signing transaction with our private key.")
            object GATHERING_SIGS : ProgressTracker.Step("Gathering the counterparty's signature.") {
                override fun childProgressTracker() = CollectSignaturesFlow.tracker()
            }

            object FINALISING_TRANSACTION : ProgressTracker.Step("Obtaining notary signature and recording transaction.") {
                override fun childProgressTracker() = FinalityFlow.tracker()
            }

            fun tracker() = ProgressTracker(
                GENERATING_TRANSACTION,
                VERIFYING_TRANSACTION,
                SIGNING_TRANSACTION,
                GATHERING_SIGS,
                FINALISING_TRANSACTION
            )
        }

        override val progressTracker = tracker()

        @Suspendable
        override fun call(): SignedTransaction {
            // Obtain a reference to the notary we want to use.
            val notary = serviceHub.networkMapCache.notaryIdentities[0]

            // Stage 1.
            progressTracker.currentStep = GENERATING_TRANSACTION

            // Generate an unsigned transaction.
            val caseState = Case(caseId, caseName, caseNumber, description, caseStatus, casePriority, serviceHub.myInfo.legalIdentities.first(), resolver)
            val txCommand = Command(CaseContract.Commands.CreateCase(), caseState.participants.map { it.owningKey })
            val txBuilder = TransactionBuilder(notary = notary)
            txBuilder.addOutputState(caseState, CASE_CONTRACT_ID)
            txBuilder.addCommand(txCommand)

            val partSignedTx = serviceHub.signInitialTransaction(txBuilder)


            val otherPartyFlow = initiateFlow(resolver)
            val fullySignedTx = subFlow(CollectSignaturesFlow(partSignedTx, setOf(otherPartyFlow), GATHERING_SIGS.childProgressTracker()))

            // Finalising the transaction.
            return subFlow(FinalityFlow(fullySignedTx, listOf(otherPartyFlow)))
        }
    }

    @InitiatedBy(Initiator::class)
    class
    Resolver(val otherPartySession: FlowSession) : FlowLogic<SignedTransaction>() {
        @Suspendable
        override fun call(): SignedTransaction {
            val signTransactionFlow = object : SignTransactionFlow(otherPartySession) {
                override fun checkTransaction(stx: SignedTransaction) = requireThat {
                    val output = stx.tx.outputs.single().data
                    "This must be an Patient transaction." using (output is Case)
                }
            }

            val txId = subFlow(signTransactionFlow).id

            return subFlow(ReceiveFinalityFlow(otherPartySession, expectedTxId = txId))
        }
    }
}

// *********
// * Close Case Flow *
// *********

@InitiatingFlow
@StartableByRPC
class CloseCaseFlow(val caseId: String) : FlowLogic<SignedTransaction>() {

    override val progressTracker = ProgressTracker()

    @Suspendable
    override fun call(): SignedTransaction {

        val caseStateAndRef = serviceHub.vaultService.queryBy<Case>().states.find {
            it.state.data.caseId == caseId
        } ?: throw IllegalArgumentException("No Case with ID $caseId found.")


        val case = caseStateAndRef.state.data
        val caseStatus = CaseStatus.CLOSED


        // Creating the output.
        val closedCase = Case(
            case.caseId,
            case.caseName,
            case.caseNumber,
            case.description,
            caseStatus,
            case.casePriority,
            case.submitter,
            case.resolver,
            case.linearId)

        val requiredSigners = listOf(case.submitter.owningKey, case.resolver.owningKey)
        val command = Command(CaseContract.Commands.CloseCase(), requiredSigners)

        // Building the transaction.
        val notary = caseStateAndRef.state.notary
        val txBuilder = TransactionBuilder(notary)
        txBuilder.addInputState(caseStateAndRef)
        txBuilder.addOutputState(closedCase, CaseContract.CASE_CONTRACT_ID)
        txBuilder.addCommand(command)

        // Sign the transaction.
        val partSignedTx = serviceHub.signInitialTransaction(txBuilder)

        // Gathering the counterparty's signgature
        val resolver = if (ourIdentity == case.submitter) case.resolver else case.submitter
        val resolverSession = initiateFlow(resolver)
        val fullySignedTx = subFlow(CollectSignaturesFlow(partSignedTx, listOf(resolverSession)))

        // Finalising the transaction.
        return subFlow(FinalityFlow(fullySignedTx, listOf(resolverSession)))
    }
}

@InitiatedBy(CloseCaseFlow::class)
class Closer(val resolverSession: FlowSession) : FlowLogic<SignedTransaction>() {
    @Suspendable
    override fun call(): SignedTransaction {
        val signTransactionFlow = object : SignTransactionFlow(resolverSession) {
            override fun checkTransaction(stx: SignedTransaction) {
                val ledgerTx = stx.toLedgerTransaction(serviceHub, false)
                val resolver = ledgerTx.inputsOfType<Case>().single().resolver
            }
        }

        val txId = subFlow(signTransactionFlow).id

        return subFlow(ReceiveFinalityFlow(resolverSession, txId))
    }
}



// *********
// * Close Case Flow *
// *********

@InitiatingFlow
@StartableByRPC
class ResolveCaseFlow(val caseId: String) : FlowLogic<SignedTransaction>() {

    override val progressTracker = ProgressTracker()

    @Suspendable
    override fun call(): SignedTransaction {

        val caseStateAndRef = serviceHub.vaultService.queryBy<Case>().states.find {
            it.state.data.caseId == caseId
        } ?: throw IllegalArgumentException("No Case with ID $caseId found.")


        val case = caseStateAndRef.state.data
        val caseStatus = CaseStatus.RESOLVED


        // Creating the output.
        val resolvedCase = Case(
            case.caseId,
            case.caseName,
            case.caseNumber,
            case.description,
            caseStatus,
            case.casePriority,
            case.submitter,
            case.resolver,
            case.linearId)

        val requiredSigners = listOf(case.submitter.owningKey, case.resolver.owningKey)
        val command = Command(CaseContract.Commands.ResolveCase(), requiredSigners)

        // Building the transaction.
        val notary = caseStateAndRef.state.notary
        val txBuilder = TransactionBuilder(notary)
        txBuilder.addInputState(caseStateAndRef)
        txBuilder.addOutputState(resolvedCase, CaseContract.CASE_CONTRACT_ID)
        txBuilder.addCommand(command)

        // Sign the transaction.
        val partSignedTx = serviceHub.signInitialTransaction(txBuilder)

        // Gathering the counterparty's signgature
        val resolver = if (ourIdentity == case.submitter) case.resolver else case.submitter
        val resolverSession = initiateFlow(resolver)
        val fullySignedTx = subFlow(CollectSignaturesFlow(partSignedTx, listOf(resolverSession)))

        // Finalising the transaction.
        return subFlow(FinalityFlow(fullySignedTx, listOf(resolverSession)))
    }
}

@InitiatedBy(ResolveCaseFlow::class)
class Resolver(val resolverSession: FlowSession) : FlowLogic<SignedTransaction>() {
    @Suspendable
    override fun call(): SignedTransaction {
        val signTransactionFlow = object : SignTransactionFlow(resolverSession) {
            override fun checkTransaction(stx: SignedTransaction) {
                val ledgerTx = stx.toLedgerTransaction(serviceHub, false)
                val resolver = ledgerTx.inputsOfType<Case>().single().resolver
            }
        }

        val txId = subFlow(signTransactionFlow).id

        return subFlow(ReceiveFinalityFlow(resolverSession, txId))
    }
}


// *********
// * Escalate Case Flow *
// *********

@InitiatingFlow
@StartableByRPC
class EscalateCaseFlow(val caseId: String) : FlowLogic<SignedTransaction>() {

    override val progressTracker = ProgressTracker()

    @Suspendable
    override fun call(): SignedTransaction {

        // Retrieving the Case Input from the Vault
        val caseStateAndRef = serviceHub.vaultService.queryBy<Case>().states.find {
            it.state.data.caseId == caseId
        } ?: throw IllegalArgumentException("No Case with ID $caseId found.")


        val case = caseStateAndRef.state.data
        val caseStatus = CaseStatus.ESCALATED


        // Creating the output.
        val escalatedCase = Case(
            case.caseId,
            case.caseName,
            case.caseNumber,
            case.description,
            caseStatus,
            case.casePriority,
            case.submitter,
            case.resolver,
            case.linearId)

        val requiredSigners = listOf(case.submitter.owningKey, case.resolver.owningKey)
        val command = Command(CaseContract.Commands.EscalateCase(), requiredSigners)

        // Building the transaction.
        val notary = caseStateAndRef.state.notary
        val txBuilder = TransactionBuilder(notary)
        txBuilder.addInputState(caseStateAndRef)
        txBuilder.addOutputState(escalatedCase, CaseContract.CASE_CONTRACT_ID)
        txBuilder.addCommand(command)

        // Sign the transaction.
        val partSignedTx = serviceHub.signInitialTransaction(txBuilder)

        // Gathering the counterparty's signgature
        val resolver = if (ourIdentity == case.submitter) case.resolver else case.submitter
        val resolverSession = initiateFlow(resolver)
        val fullySignedTx = subFlow(CollectSignaturesFlow(partSignedTx, listOf(resolverSession)))

        // Finalising the transaction.
        return subFlow(FinalityFlow(fullySignedTx, listOf(resolverSession)))
    }
}

@InitiatedBy(EscalateCaseFlow::class)
class Escalator(val resolverSession: FlowSession) : FlowLogic<SignedTransaction>() {
    @Suspendable
    override fun call(): SignedTransaction {
        val signTransactionFlow = object : SignTransactionFlow(resolverSession) {
            override fun checkTransaction(stx: SignedTransaction) {
                val ledgerTx = stx.toLedgerTransaction(serviceHub, false)
                val resolver = ledgerTx.inputsOfType<Case>().single().resolver
            }
        }

        val txId = subFlow(signTransactionFlow).id

        return subFlow(ReceiveFinalityFlow(resolverSession, txId))
    }
}




// *********
// * Send Message Flows *
// *********


@InitiatingFlow
@StartableByRPC
class SendMessageFlow(val to: Party,
                      val userId: String,
                      val body: String) : FlowLogic<SignedTransaction>() {

    companion object {
        object GENERATING_TRANSACTION : ProgressTracker.Step("Generating transaction based on new Message.")
        object VERIFYING_TRANSACTION : ProgressTracker.Step("Verifying contract constraints.")
        object SIGNING_TRANSACTION : ProgressTracker.Step("Signing transaction with our private key.")
        object GATHERING_SIGS : ProgressTracker.Step("Gathering the counterparty's signature.") {
            override fun childProgressTracker() = CollectSignaturesFlow.tracker()
        }

        object FINALISING_TRANSACTION : ProgressTracker.Step("Obtaining notary signature and recording transaction.") {
            override fun childProgressTracker() = FinalityFlow.tracker()
        }

        fun tracker() = ProgressTracker(
            GENERATING_TRANSACTION,
            VERIFYING_TRANSACTION,
            SIGNING_TRANSACTION,
            GATHERING_SIGS,
            FINALISING_TRANSACTION
        )
    }

    override val progressTracker = tracker()

    /**
     * The flow logic is encapsulated within the call() method.
     */


    @Suspendable
    override fun call(): SignedTransaction {
        // Obtain a reference to the notary we want to use.
        val notary = serviceHub.networkMapCache.notaryIdentities[0]
        progressTracker.currentStep = GENERATING_TRANSACTION

        // Generate an unsigned transaction.
        val me = ourIdentityAndCert.party
        val fromUserId = me.toString()
        val sent = true
        val delivered = true
        val fromMe = true
        val time = LocalDateTime.now()
        val formatter = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM)
        val formatted = time.format(formatter)
        val messageNumber = "msg_" + formatted.toString()
        val messageState = Message(UniqueIdentifier(), body, fromUserId, to, me, userId, sent, delivered, fromMe, formatted, messageNumber)
        val txCommand = Command(MessageContract.Commands.SendMessage(), messageState.participants.map { it.owningKey })
        progressTracker.currentStep = VERIFYING_TRANSACTION

        val txb = TransactionBuilder(notary)
        txb.addOutputState(messageState, MESSAGE_CONTRACT_ID)
        txb.addCommand(txCommand)

        txb.verify(serviceHub)
        // Sign the transaction.
        progressTracker.currentStep = SIGNING_TRANSACTION
        val partSignedTx = serviceHub.signInitialTransaction(txb)

        val otherPartySession = initiateFlow(to)
        val fullySignedTx = subFlow(CollectSignaturesFlow(partSignedTx, setOf(otherPartySession), GATHERING_SIGS.childProgressTracker()))

        // Finalising the transaction.
        return subFlow(FinalityFlow(fullySignedTx, listOf(otherPartySession)))
    }

    @InitiatedBy(SendMessageFlow::class)
    // The flow is open
    open class SendMessageResponder(val session: FlowSession) : FlowLogic<SignedTransaction>() {

        // An overridable function to contain validation is provided
        open fun checkTransaction(stx: SignedTransaction) {
            // To be implemented by sub type flows - otherwise do nothing
        }

        @Suspendable
        final override fun call(): SignedTransaction {
            val stx = subFlow(object : SignTransactionFlow(session) {
                override fun checkTransaction(stx: SignedTransaction) {
                    // The validation function is called
                    this@SendMessageResponder.checkTransaction(stx)
                    // Any other rules the CorDapp developer wants executed
                }
            })
            return subFlow(ReceiveFinalityFlow(otherSideSession = session, expectedTxId = stx.id))
        }
    }
}