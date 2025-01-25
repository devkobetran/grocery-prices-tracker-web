package com.grocery.prices

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PricesApplication

fun main(args: Array<String>) {
	runApplication<PricesApplication>(*args)
}
