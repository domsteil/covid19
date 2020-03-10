package io.covid.patient

import net.corda.core.crypto.NullKeys
import net.corda.core.identity.AbstractParty
import net.corda.core.schemas.MappedSchema
import net.corda.core.schemas.PersistentState
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Index
import javax.persistence.Table

/**
 * The family of schemas for [PatientSchema].
 */

object PatientSchema

/**
 * First version of an [PatientSchema] schema.
 */


object PatientSchemaV1 : MappedSchema(PatientSchema.javaClass, 1, listOf(PersistentPatient::class.java)) {
    @Entity
    @Table(name = "patient_states", indexes = arrayOf(Index(name = "idx_patient_controller", columnList = "controller"),
            Index(name = "idx_patient_last_name", columnList = "last_name")))
    class PersistentPatient(
            @Column(name = "patient_id")
            var patientId: String,

            @Column(name = "first_name")
            var firstName: String,

            @Column(name = "last_name")
            var lastName: String,

            @Column(name = "phone")
            var phone: String,

            @Column(name = "email")
            var email: String,

            @Column(name = "controller")
            var controller: String,

            @Column(name = "processor")
            var processor: String,

            @Column(name = "linear_id")
            var linearId: String

    ) : PersistentState() {
        constructor() : this("", "default-constructor-required-for-hibernate", "", "", "", "", "", "")
    }

}