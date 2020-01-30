package com.marco.restServices;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2  //Swagger: framework to REST api Documentation
public class RestServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestServicesApplication.class, args);
	}
	
	@Bean //http://localhost:8080/swagger-ui.html#/
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2)
				.groupName("Music.API")
				.select()
				.paths(PathSelectors.regex("/api/v1.*"))
				.build().apiInfo(getApiInfo());
	}
	
	private ApiInfo getApiInfo() {
		return new ApiInfo("Music API",
				"Rest Services for music API Project",
				"1.0","API Terms of Service URL",
				new Contact("Marco Chavez", "marco.github.io",
				"mzamudio23@hotmail.com"), "API License", "Api License URL",
				Collections.EMPTY_LIST);

	}
}
