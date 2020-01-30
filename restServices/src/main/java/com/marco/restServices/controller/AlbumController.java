package com.marco.restServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marco.restServices.Services.AlbumService;
import com.marco.restServices.entity.Album;
import com.marco.restServices.entity.StandardResponse;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("api/v1/album") 
@Api(tags = "Album api controller", value ="albumController", description = "API for album service") //viene de swagger
public class AlbumController {

	@Autowired
	private AlbumService albumService;

	@PostMapping
	@ApiOperation(value="Creates an album in the database")
	public StandardResponse<Album> createAlbum(@RequestBody Album album){
		return albumService.createAlbum(album);
	}

	@GetMapping
	@ApiOperation (value = "Retrieves all album in database")
	public List <Album> findAll(){
		return albumService.findAll();
	}

	@GetMapping("/{albumId}")
	@ApiOperation (value = "Gets an album by its Id")
	public Album findById(@PathVariable("albumId") Integer id) {
		return albumService.findById(id);
	}

	@DeleteMapping("/{albumId}")
	@ApiOperation (value = "Deletes an album in db by its ID")
	public StandardResponse<Album> deleteById (@PathVariable("albumId") Integer id) {
		return albumService.deleteById(id);
	}

	@GetMapping("/count")
	@ApiOperation (value = "Retrieves the total of objects in albums table")
	public Long count() {
		return albumService.count();
	}

	@PutMapping
	@ApiOperation (value = "Updates an existing album with the given information")
	public StandardResponse<Album> updateAlbum(@RequestBody Album album){
		return albumService.updateAlbum(album);
	}
}

