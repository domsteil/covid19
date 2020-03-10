package io.stateset.server

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan


/**
 * Our Spring Boot approval.
 */
// Remove security and error handling
@SpringBootApplication(exclude = arrayOf(SecurityAutoConfiguration::class, ErrorMvcAutoConfiguration::class))
@ComponentScan(basePackages = arrayOf("io.covid", "com.github.manosbatsis.corbeans"))
class Application


fun main(args: Array<String>) {
    runApplication<Application>(*args)
}
