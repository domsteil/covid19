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

package io.covid.server.components

import net.corda.core.messaging.vaultQueryBy
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.RestController
import sun.security.timestamp.TSResponse
import org.springframework.web.bind.annotation.PostMapping
import com.github.manosbatsis.corbeans.corda.common.NodeParams
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import org.springframework.beans.factory.annotation.Autowired
import java.util.*
import javax.annotation.PostConstruct
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.CrossOrigin
import io.stateset.case.*
import io.stateset.patient.*
import net.corda.core.node.services.AttachmentId
import net.corda.core.node.services.vault.AttachmentQueryCriteria
import net.corda.core.node.services.vault.Builder
import net.corda.core.node.services.vault.Sort
import org.springframework.core.io.InputStreamResource
import org.springframework.http.HttpHeaders
import org.springframework.web.multipart.MultipartFile
import java.io.FileInputStream
import java.io.FileOutputStream
import java.io.InputStream
import java.net.URI
import java.nio.file.Files
import java.nio.file.Paths
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream
import javax.servlet.http.HttpServletRequest


/**
 * Covid API Endpoints
 */

@CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
@RestController
@RequestMapping("/api/{nodeName}")
class CovidController() {

    companion object {
        private val logger = LoggerFactory.getLogger(RestController::class.java)
    }


    protected lateinit var defaultNodeName: String

    @Autowired
    @Suppress("SpringJavaInjectionPointsAutowiringInspection")
    protected lateinit var services: Map<String, StatesetService>

    @PostConstruct
    fun postConstruct() {
        // if single node config, use the only node name as default, else reserve explicitly for cordform
        defaultNodeName = if (services.keys.size == 1) services.keys.first() else NodeParams.NODENAME_CORDFORM
        logger.debug(
            "Auto-configured RESTful services for Corda nodes:: {}, default node: {}",
            services.keys,
            defaultNodeName
        )
    }

    /**
     * Handle both "api/sendMessage" and "api/message/{nodeName}" by using `cordform` as the default
     * node name to support optional dedicated server per node when using `runnodes`.
     */
    fun getService(optionalNodeName: Optional<String>): StatesetService {
        val nodeName = if (optionalNodeName.isPresent) optionalNodeName.get() else defaultNodeName
        return this.services.get("${nodeName}NodeService")
            ?: throw IllegalArgumentException("Node not found: $nodeName")
    }

    /** Maps an Case to a JSON object. */

    private fun Case.toJson(): Map<String, String> {
        return kotlin.collections.mapOf(
            "caseId" to caseId,
            "caseName" to caseName,
            "caseNumber" to caseNumber,
            "summary" to summary,
            "location" to location,
            "latitude" to latitude,
            "longitude" to longitude,
            "date" to date,
            "caseStatus" to caseStatus.toString(),
            "priority" to casePriority.toString(),
            "submitter" to submitter.toString(),
            "processor" to resolver.toString()
        )
    }


    /** Maps an Patient to a JSON object. */

    private fun Patient.toJson(): Map<String, String> {
        return kotlin.collections.mapOf(
            "patientId" to patientId,
            "firstName" to firstName,
            "lastName" to lastName,
            "sex" to sex.toString(),
            "age" to age.toString(),
            "email" to email,
            "phone" to phone,
            "controller" to controller.name.organisation,
            "processor" to processor.name.organisation,
            "linearId" to linearId.toString())
    }



    /** Maps an Chat to a JSON object. */

    private fun Message.toJson(): Map<String, String> {
        return kotlin.collections.mapOf(
            "id" to id.toString(),
            "body" to body,
            "to" to to.name.organisation,
            "from" to from.name.organisation,
            "fromMe" to fromMe.toString(),
            "time" to time.toString(),
            "linearId" to linearId.toString()
        )
    }


    /** Returns a list of existing Messages. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @GetMapping("/getMessages")
    @ApiOperation(value = "Get Messages")
    fun getMessages(@PathVariable nodeName: Optional<String>): List<Map<String, String>> {
        val messageStateAndRefs = this.getService(nodeName).proxy().vaultQuery(Message::class.java).states
        val messageStates = messageStateAndRefs.map { it.state.data }
        return messageStates.map { it.toJson() }
    }


    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @PostMapping("/sendMessage")
    @ApiOperation(value = "Send a message to the target party")
    fun sendMessage(
        @PathVariable nodeName: Optional<String>,
        @ApiParam(value = "The target party for the message")
        @RequestParam(required = true) to: String,
        @ApiParam(value = "The user Id for the message")
        @RequestParam(required = true) userId: String,
        @ApiParam(value = "The message text")
        @RequestParam("body") body: String
    ): ResponseEntity<Any?> {


        val (status, message) = try {

            val result = getService(nodeName).sendMessage(to, userId, body)

            HttpStatus.CREATED to mapOf<String, String>(
                "body" to "$body",
                "to" to "$to",
                "userId" to "$userId"
            )

        } catch (e: Exception) {
            logger.error("Error sending message to ${to}", e)
            e.printStackTrace()
            HttpStatus.BAD_REQUEST to e.message
        }
        return ResponseEntity<Any?>(message, status)
    }


    /** Returns a list of existing Patients. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @GetMapping("/getPatients")
    @ApiOperation(value = "Get Patients")
    fun getPatients(@PathVariable nodeName: Optional<String>): List<Map<String, String>> {
        val patientStateAndRefs = this.getService(nodeName).proxy().vaultQuery(Patient::class.java).states
        val patientStates = patientStateAndRefs.map { it.state.data }
        return patientStates.map { it.toJson() }
    }


    /** Returns a list of existing Cases. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @GetMapping("/getCases")
    @ApiOperation(value = "Get Cases")
    fun getCases(@PathVariable nodeName: Optional<String>): List<Map<String, String>> {
        val caseStateAndRefs = this.getService(nodeName).proxy().vaultQuery(Case::class.java).states
        val caseStates = caseStateAndRefs.map { it.state.data }
        return caseStates.map { it.toJson() }
    }


    /** Creates a Patient. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @PostMapping("/createPatient")
    @ApiOperation(value = "Create Patient")
    fun createPatient(
        @PathVariable nodeName: Optional<String>,
        @RequestParam("patientId") patientId: String,
        @RequestParam("firstName") firstName: String,
        @RequestParam("lastName") lastName: String,
        @RequestParam("sex") sex: Sex,
        @RequestPatam("age") age: Int,
        @RequestParam("email") email: String,
        @RequestParam("phone") phone: String,
        @RequestParam("processor") processor: String?
    ): ResponseEntity<Any?> {


        if (processor == null) {
            return ResponseEntity.status(TSResponse.BAD_REQUEST)
                .body("Query parameter 'counterPartyName' missing or has wrong format.\n")
        }


        val (status, message) = try {

            val result = getService(nodeName).createPatient(patientId, firstName, lastName, sex, age, email, phone, processor)

            HttpStatus.CREATED to mapOf<String, String>(
                "patientId" to "$patientId",
                "firstName" to "$firstName",
                "lastName" to "$lastName",
                "sex" to "$sex",
                "age" to "$age",
                "email" to "$email",
                "phone" to "$phone",
                "processor" to "$processor"
            )

        } catch (e: Exception) {
            logger.error("Error sending Patient to ${processor}", e)
            e.printStackTrace()
            HttpStatus.BAD_REQUEST to e.message
        }
        return ResponseEntity<Any?>(message, status)
    }


    /** Creates a Case. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @PostMapping("/createCase")
    @ApiOperation(value = "Create Case")
    fun createCase(
        @PathVariable nodeName: Optional<String>,
        @RequestParam("caseId") caseId: String,
        @RequestParam("caseName") caseName: String,
        @RequestParam("caseNumber") caseNumber: String,
        @RequestParam("summary") summary: Date,
        @RequestParam("location") location: String,
        @RequestParam("country") country: String,
        @RequestParam("latitude") latitude: String,
        @RequestParam("longitude") longitude: String,
        @RequestParam("date") date: Date,
        @RequestParam("caseStatus") caseStatus: CaseStatus,
        @RequestParam("casePriority") casePriority: CasePriority,
        @RequestParam("resolver") resolver: String?
    ): ResponseEntity<Any?> {


        if (resolver == null) {
            return ResponseEntity.status(TSResponse.BAD_REQUEST)
                .body("Query parameter 'counterPartyName' missing or has wrong format.\n")
        }


        val (status, message) = try {

            val result = getService(nodeName).createCase(
                caseId,
                caseName,
                caseNumber,
                description,
                caseStatus,
                casePriority,
                resolver
            )

            HttpStatus.CREATED to mapOf<String, String>(
                "caseId" to "$caseId",
                "caseName" to "$caseName",
                "caseNumber" to "$caseNumber",
                "description" to "$description",
                "casePriority" to "$casePriority",
                "caseStatus" to "$caseStatus",
                "resolver" to "$resolver"
            )

        } catch (e: Exception) {
            logger.error("Error sending case to ${resolver}", e)
            e.printStackTrace()
            HttpStatus.BAD_REQUEST to e.message
        }
        return ResponseEntity<Any?>(message, status)
    }


    /** Close the Case. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @PostMapping(value = "/closeCase")
    @ApiOperation(value = "Close Case")
    fun closeCase(@PathVariable nodeName: Optional<String>, @RequestParam("caseId") caseId: String, request: HttpServletRequest): ResponseEntity<Any?> {
        val caseId = request.getParameter("caseId")
        val (status, message) = try {

            val result = getService(nodeName).closeCase(caseId)

            HttpStatus.CREATED to mapOf<String, String>(
                "caseId" to "$caseId"
            )

        } catch (e: Exception) {
            logger.error("Error closing case ${caseId}", e)
            e.printStackTrace()
            HttpStatus.BAD_REQUEST to e.message
        }
        return ResponseEntity<Any?>(message, status)
    }

    /** Resolve Case. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @PostMapping(value = "/resolveCase")
    @ApiOperation(value = "Resolve Case")
    fun resolveCase(@PathVariable nodeName: Optional<String>, @RequestParam("caseId") caseId: String, request: HttpServletRequest): ResponseEntity<Any?> {
        val caseId = request.getParameter("caseId")
        val (status, message) = try {

            val result = getService(nodeName).resolveCase(caseId)

            HttpStatus.CREATED to mapOf<String, String>(
                "caseId" to "$caseId"
            )

        } catch (e: Exception) {
            logger.error("Error resolving case ${caseId}", e)
            e.printStackTrace()
            HttpStatus.BAD_REQUEST to e.message
        }
        return ResponseEntity<Any?>(message, status)
    }

    /** Escalate Case. */

    @CrossOrigin(origins = ["https://dapps.ngrok.io", "https://dsoa.network", "https://camila.network", "http://localhost:8080", "http://localhost:3000", "https://statesets.com", "https://stateset.io", "https://stateset.in"])
    @PostMapping(value = "/escalateCase")
    @ApiOperation(value = "Escalate Case")
    fun escalateCase(@PathVariable nodeName: Optional<String>, @RequestParam("caseId") caseId: String, request: HttpServletRequest): ResponseEntity<Any?> {
        val caseId = request.getParameter("caseId")
        val (status, message) = try {

            val result = getService(nodeName).escalateCase(caseId)

            HttpStatus.CREATED to mapOf<String, String>(
                "caseId" to "$caseId"
            )

        } catch (e: Exception) {
            logger.error("Error escalating case ${caseId}", e)
            e.printStackTrace()
            HttpStatus.BAD_REQUEST to e.message
        }
        return ResponseEntity<Any?>(message, status)
    }

}