package com.marco.restServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marco.restServices.Services.SongService;
import com.marco.restServices.entity.Songs;
import com.marco.restServices.entity.StandardResponse;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/v1/songs")  //endpoint
@Api(tags = "Song api controller", value ="SongController", description = "API for Song service") //viene de swagger
public class SongController {

	@Autowired
	private SongService songService;
	
	@GetMapping("/{id}")
	@CrossOrigin
	@ApiOperation(value="Retrieves all song by its id")
	public Songs findById (@PathVariable("id") Integer id) {
		return songService.findById(id);
	}
	
	@DeleteMapping("/{id}")
	@CrossOrigin
	@ApiOperation(value="Deletes a song by its id")
	public StandardResponse<Songs> deletedById(@PathVariable("id") Integer id){
		return songService.deleteById(id);
	}
	
	@PutMapping
	@CrossOrigin
	@ApiOperation(value="Updates an existing song with the given informatio")
	public StandardResponse<Songs> update(@RequestBody Songs song){
		return songService.update(song);
	}
	
	//POST: to create songs out of songService create method
	@PostMapping
	@CrossOrigin
	@ApiOperation(value="Creates a song in the database")
	public StandardResponse<Songs> create(@RequestBody Songs Song){
		return songService.create(Song);
	}
	
	//GET : to retrieve all songs in db songService findall.
	@GetMapping
	@ApiOperation(value="Retrieves all songs in database")
	public List<Songs> findAll(){
		return songService.findAll();
	}	
	
	@GetMapping ("/album/{albumId}")
	@CrossOrigin
	@ApiOperation(value="Find by album id")
	public List <Songs> findByAlbumId (@PathVariable("albumId") Integer albumId){
		return songService.findByAlbumId(albumId);
	}
}
