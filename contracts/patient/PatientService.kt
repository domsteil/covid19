package io.covid.patient

import net.corda.core.concurrent.CordaFuture
import net.corda.core.contracts.ContractState
import net.corda.core.contracts.StateAndRef
import net.corda.core.identity.AnonymousParty
import net.corda.core.identity.Party
import net.corda.core.node.services.CordaService
import net.corda.core.node.services.vault.QueryCriteria
import net.corda.core.serialization.SerializeAsToken
import java.security.PublicKey
import java.util.*



@CordaService
interface PatientService : SerializeAsToken {

    // Patients which the calling node hosts.
    fun myPatients(): List<StateAndRef<Patient>>

    // Returns all patients, including those hosted by other nodes.
    fun allPatients(): List<StateAndRef<Patient>>

    // Creates a new patient and returns the PatientInfo StateAndRef.
    fun createPatient(patientName: String): CordaFuture<StateAndRef<Patient>>

    // Overload for creating an patient with a specific patient ID.
    fun createPatient(patientName: String, patientId: UUID):
            CordaFuture<StateAndRef<Patient>>

    // Creates a new KeyPair, links it to the patient and returns the publickey.
    fun freshKeyForPatient(patientId: UUID): AnonymousParty

    // Returns all the keys used by the patient specified by the patient ID.
    fun patientKeys(patientId: UUID): List<PublicKey>

    // Returns the PatientInfo for an patient name or patient ID.
    fun patientInfo(patientId: UUID): StateAndRef<Patient>?

    // Returns the PatientInfo for a given owning key
    fun patientInfo(owningKey: PublicKey): StateAndRef<Patient>?

    // The assumption here is that Patient names are unique at the node level but are not
    // guaranteed to be unique at the network level. The host Party can be used to
    // de-duplicate patient names at the network level.
    fun patientInfo(patientName: String): StateAndRef<Patient>?

    // Returns the Party which hosts the patient specified by patient ID.
    fun hostForPatient(patientId: UUID): Party?

    // Allows the patient host to perform a vault query for the specified patient ID.
    fun ownedByPatientVaultQuery(
            patientIds: List<UUID>,
            queryCriteria: QueryCriteria
    ): List<StateAndRef<*>>

    fun broadcastedToPatientVaultQuery(
            patientIds: List<UUID>,
            queryCriteria: QueryCriteria
    ): List<StateAndRef<*>>

    fun ownedByPatientVaultQuery(
            patientId: UUID,
            queryCriteria: QueryCriteria
    ): List<StateAndRef<*>>

    fun broadcastedToPatientVaultQuery(
            patientId: UUID,
            queryCriteria: QueryCriteria
    ): List<StateAndRef<*>>

    // Updates the patient info with new patient details. This may involve creating a
    // new patient on another node with the new details. Once the new patient has
    // been created, all the states can be moved to the new patient.
    fun movePatient(currentInfo: StateAndRef<Patient>, newInfo: Patient)

    // De-activates the patient.
    fun deactivatePatient(patientId: UUID)

    // Sends PatientInfo specified by the patient ID, to the specified Party. The
    // receiving Party will be able to access the PatientInfo from their PatientService.
    fun sharePatientInfoWithParty(patientId: UUID, party: Party): CordaFuture<Unit>

    fun <T : ContractState> broadcastStateToPatient(patientId: UUID, state: StateAndRef<T>): CordaFuture<Unit>
}