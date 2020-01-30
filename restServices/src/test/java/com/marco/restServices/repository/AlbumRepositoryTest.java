package com.marco.restServices.repository;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.marco.restServices.entity.Album;

@SpringBootTest
public class AlbumRepositoryTest {
	
	@Autowired
	AlbumRepository albumRepository;
	
	@Test
	public void testSelect() {
		List<Album> albums = albumRepository.findAll();
		//Predicate<String>
		//albums.forEach(str -> System.out::Println)
		
		//Java8, streams, lamda functions, predicates
		albums.forEach(System.out::println);
	}
}
