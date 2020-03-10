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

import com.github.manosbatsis.corbeans.spring.boot.corda.rpc.NodeRpcConnection
import com.github.manosbatsis.corbeans.spring.boot.corda.service.CordaNodeServiceImpl
import io.covid.*
import net.corda.core.identity.Party
import net.corda.core.transactions.SignedTransaction
import net.corda.core.utilities.getOrThrow
import org.slf4j.LoggerFactory

class CovidService(
        nodeRpcConnection: NodeRpcConnection
) : CordaNodeServiceImpl(nodeRpcConnection) {

    companion object {
        private val logger = LoggerFactory.getLogger(CordaNodeServiceImpl::class.java)
    }

    /** Send a Message! */
    fun sendMessage(to: String, userId: String, message: String): SignedTransaction {
        val proxy = this.nodeRpcConnection.proxy

        val matches = proxy.partiesFromName(to, exactMatch = true)
        logger.debug("sendMessage, peers: {}", this.peers())
        logger.debug("sendMessage, target: {}, matches: {}", to, matches)

        val to: Party = when {
            matches.isEmpty() -> throw IllegalArgumentException("Target string \"$to\" doesn't match any nodes on the network.")
            matches.size > 1 -> throw IllegalArgumentException("Target string \"$to\"  matches multiple nodes on the network.")
            else -> matches.single()
        }
        // Start the flow, block and wait for the response.
        return proxy.startFlowDynamic(SendMessageFlow::class.java, to, userId, message).returnValue.getOrThrow()
    }

    /** Create a Patient */
    fun createPatient(patientId: String, firstName: String, lastName: String, sex: Sex, age: Int, phone: String, email: String, processor: String): SignedTransaction {
        val proxy = this.nodeRpcConnection.proxy

        val matches = proxy.partiesFromName(processor, exactMatch = true)
        logger.debug("sendMessage, peers: {}", this.peers())
        logger.debug("sendMessage, target: {}, matches: {}", processor, matches)

        val processor: Party = when {
            matches.isEmpty() -> throw IllegalArgumentException("Target string \"$processor\" doesn't match any nodes on the network.")
            matches.size > 1 -> throw IllegalArgumentException("Target string \"$processor\"  matches multiple nodes on the network.")
            else -> matches.single()
        }
        // Start the flow, block and wait for the response.
        return proxy.startFlowDynamic(CreatePatientFlow.Controller::class.java, patientId, firstName, lastName, sex, age, phone, email, processor).returnValue.getOrThrow()
    }



    /** Create a Case */
    fun createCase(caseId: String, caseName: String, caseNumber: String, summary: String, location: String, country: String, latitude: String, longitude: String, date: Date, caseStatus: CaseStatus, casePriority: CasePriority, resolver: String): SignedTransaction {
        val proxy = this.nodeRpcConnection.proxy

        val matches = proxy.partiesFromName(resolver, exactMatch = true)
        logger.debug("sendMessage, peers: {}", this.peers())
        logger.debug("sendMessage, target: {}, matches: {}", resolver, matches)

        val resolver: Party = when {
            matches.isEmpty() -> throw IllegalArgumentException("Target string \"$resolver\" doesn't match any nodes on the network.")
            matches.size > 1 -> throw IllegalArgumentException("Target string \"$resolver\"  matches multiple nodes on the network.")
            else -> matches.single()
        }
        // Start the flow, block and wait for the response.
        return proxy.startFlowDynamic(CreateCaseFlow.Initiator::class.java, caseId, caseName, caseNumber, summary, location, country, latitude, longitude, date, caseStatus, casePriority, resolver).returnValue.getOrThrow()
    }

    /** Close a Case! */
    fun closeCase(caseId: String): SignedTransaction {
        val proxy = this.nodeRpcConnection.proxy

        // Start the flow, block and wait for the response.
        return proxy.startFlowDynamic(CloseCaseFlow::class.java, caseId).returnValue.getOrThrow()
    }

    /** Resolve a Case! */
    fun resolveCase(caseId: String): SignedTransaction {
        val proxy = this.nodeRpcConnection.proxy

        // Start the flow, block and wait for the response.
        return proxy.startFlowDynamic(ResolveCaseFlow::class.java, caseId).returnValue.getOrThrow()
    }

    /** Escalate a Case! */
    fun escalateCase(caseId: String): SignedTransaction {
        val proxy = this.nodeRpcConnection.proxy

        // Start the flow, block and wait for the response.
        return proxy.startFlowDynamic(EscalateCaseFlow::class.java, caseId).returnValue.getOrThrow()
    }
}