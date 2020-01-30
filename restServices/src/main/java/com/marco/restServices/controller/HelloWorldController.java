package com.marco.restServices.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/helloWorld")      //requiere de parametro
public class HelloWorldController {

	/**
	 *  para que lo pueda reconocer el servicio web
	 *  
	 *  GET  -- Retrieve data
	 *  POST -- send information and do logic
	 *  PUT  -- update to existing value in DB
	 *  DELETE - delete data on DB
	 */
	
	@GetMapping
	public String helloworld() {
		return "Hello World!";
	}
	
	@GetMapping("/sum/{a}/{b}") //http://localhost:8080/api/v1/helloWorld/sum/5/15
	public String sum (@PathVariable ("a") Integer a,@PathVariable ("b") Integer b) {
		return "The sum is + " + (a + b);
	}
	
	//cuatro operaciones basicas
	
}
