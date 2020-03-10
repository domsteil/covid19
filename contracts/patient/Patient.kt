/**
 *   Copyright 2020, Stateset.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

package io.covid.patient

import net.corda.core.contracts.*
import net.corda.core.contracts.Requirements.using
import net.corda.core.crypto.NullKeys
import net.corda.core.identity.AbstractParty
import net.corda.core.identity.Party
import net.corda.core.schemas.MappedSchema
import net.corda.core.schemas.PersistentState
import net.corda.core.schemas.QueryableState
import net.corda.core.serialization.CordaSerializable
import net.corda.core.transactions.LedgerTransaction
import java.lang.IllegalArgumentException
import java.security.PublicKey



/**
 * The state object recording Patient between two parties.
 *
 * A state must implement [Patient] or one of its descendants.
 *
 * @Param patientId of the Patient.
 * @Param firstName of the Patient.
 * @Param lastName of the Patient.
 * @param email of the Patient.
 * @param phone of the Patient.
 * @param owner the party who owns the Patient.
 */

@CordaSerializable
@BelongsToContract(PatientContract::class)
data class Patient(val patientId: String,
                   val firstName: String?,
                   val lastName: String?,
                   val sex: Sex,
                   val age: Int,
                   val email: String,
                   val phone: String,
                   val controller: Party,
                   val processor: Party,
                   override val linearId: UniqueIdentifier = UniqueIdentifier()) : LinearState, QueryableState {

    override val participants: List<AbstractParty> get() = listOf(controller, processor)

    override fun supportedSchemas(): Iterable<MappedSchema> = listOf(PatientSchemaV1)

    override fun generateMappedObject(schema: MappedSchema): PersistentState {
        return when (schema) {
            is PatientSchemaV1 -> PatientSchemaV1.PersistentPatient(
                    patientId = this.patientId,
                    firstName = this.firstName,
                    lastName = this.lastName,
                    sex = this.sex.toString(),
                    age = this.age.toString(),
                    email = this.email,
                    phone = this.phone,
                    controller = this.controller.toString(),
                    processor = this.processor.toString(),
                    linearId = this.linearId.toString()
            )
            else -> throw IllegalArgumentException("Unrecognised schema $schema")
        }
    }
}


@CordaSerializable
enum class Sex {
    M, F, O

}

class PatientContract : Contract {
    companion object {
        val PATIENT_CONTRACT_ID = PatientContract::class.java.canonicalName
    }

    interface Commands : CommandData {
        class CreatePatient : TypeOnlyCommandData(), Commands
        class TransferPatient : TypeOnlyCommandData(), Commands
        class SharePatient : TypeOnlyCommandData(), Commands
        class UpdatePatient : TypeOnlyCommandData(), Commands
        class DeletePatient : TypeOnlyCommandData(), Commands
    }

    override fun verify(tx: LedgerTransaction) {
        val command = tx.commands.requireSingleCommand<Commands>()
        val setOfSigners = command.signers.toSet()
        when (command.value) {
            is Commands.CreatePatient -> verifyCreate(tx, setOfSigners)
            is Commands.TransferPatient -> verifyTransfer(tx, setOfSigners)
            is Commands.SharePatient -> verifyShare(tx, setOfSigners)
            is Commands.UpdatePatient -> verifyUpdate(tx, setOfSigners)
            is Commands.DeletePatient -> verifyDelete(tx, setOfSigners)
            else -> throw IllegalArgumentException("Unrecognised command.")
        }
    }

    private fun verifyCreate(tx: LedgerTransaction, signers: Set<PublicKey>) = requireThat {
        "No inputs must be consumed." using (tx.inputStates.isEmpty())
        "Only one out state should be created." using (tx.outputStates.size == 1)
        val output = tx.outputsOfType<Patient>().single()
        "Owner only may sign the Patient issue transaction." using (output.controller.owningKey in signers)
    }

    private fun verifyTransfer(tx: LedgerTransaction, signers: Set<PublicKey>) = requireThat {
        val inputPatients = tx.inputsOfType<Patient>()
        //val inputPatientTransfers = tx.inputsOfType<PatientTransfer>()
        "There must be one input Patient." using (inputPatients.size == 1)


        val inputPatient = inputPatients.single()
        val outputs = tx.outputsOfType<Patient>()
        // If the obligation has been partially settled then it should still exist.
        "There must be one output Patient." using (outputs.size == 1)

        // Check only the paid property changes.
        val output = outputs.single()
        "Must not not change Patient data except processor field value." using (inputPatient == output.copy(controller = inputPatient.controller))
        "Owner only may sign the Patient transfer transaction." using (output.controller.owningKey in signers)
    }


    private fun verifyShare(tx: LedgerTransaction, signers: Set<PublicKey>) = requireThat {
        "Only one Account should be shared." using (tx.inputStates.size == 1)
        "Only one Account should be shared." using (tx.outputStates.size == 1)
        val output = tx.outputsOfType<Patient>().single()
        "Owner only may sign the Account share transaction." using (output.controller.owningKey in signers)
    }


    private fun verifyUpdate(tx: LedgerTransaction, signers: Set<PublicKey>) = requireThat {
        "No inputs must be consumed." using (tx.inputStates.size == 1)
        "Only one out state should be created." using (tx.outputStates.size == 1)
        val output = tx.outputsOfType<Patient>().single()
        "Owner only may sign the Account issue transaction." using (output.controller.owningKey in signers)
    }


    private fun verifyDelete(tx: LedgerTransaction, signers: Set<PublicKey>) = requireThat {
        "No inputs must be consumed." using (tx.inputStates.size == 1)
        "There should be no output state" using (tx.outputStates.size == 0)
        val output = tx.outputsOfType<Patient>().single()
        "Owner only may sign the Account issue transaction." using (output.controller.owningKey in signers)
    }
}