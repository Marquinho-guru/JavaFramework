package com.marco.restServices.Services;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marco.restServices.entity.Album;
import com.marco.restServices.entity.StandardResponse;
import com.marco.restServices.repository.AlbumRepository;
import com.marco.restServices.repository.SongRepository;

@Service	
public class AlbumService {

	@Autowired
	private AlbumRepository albumRepository;
	
	@Autowired
	private SongRepository songRepository;
	
	
	public StandardResponse<Album> createAlbum(Album album){
		StandardResponse<Album> response = new StandardResponse<Album>();
		try {
			response.setEntity(albumRepository.save(album));
			response.setStatus("SUCCESS!");
			response.setResponseText("Album Saved!");
		} catch (Exception e) {
			response.setEntity(null);
			response.setStatus("ERROR");
			response.setResponseText(e.getMessage());
		}
		return response;
	}
	
	public List<Album> findAll(){
		return albumRepository.findAll();
	}
	
	public Album findById(Integer id) {
		return albumRepository.getOne(id);
	}
	
	public StandardResponse<Album> deleteById(Integer id) {
		StandardResponse<Album> response = new StandardResponse<Album>();
		try {
			response.setEntity(findById(id));
			if (!songRepository.findByAlbumId(id).isEmpty()) throw new SQLIntegrityConstraintViolationException();
			albumRepository.deleteById(id);
			response.setStatus("SUCCESS");
			response.setResponseText("album with Id: "+ id + " deleted!");
		}catch (SQLIntegrityConstraintViolationException e ) {
			response.setEntity(null);
			response.setStatus("ERROR");
			response.setResponseText("Album with id:"+id + " has song saved!");
		}catch (Exception e) {
			response.setEntity(null);
			response.setStatus("ERROR");
			response.setResponseText(e.getMessage());
		}
		return response;
		
	}
	
	public Long count() {
		return albumRepository.count();
	}
	
	public StandardResponse<Album> updateAlbum(Album album){
		StandardResponse<Album> response = new StandardResponse<>();
		try {
			albumRepository.getOne(album.getId());
			response.setEntity(albumRepository.save(album));
			response.setStatus("SUCCESS");
			response.setResponseText("album with Id:"+  album.getId() + " update!");
		}catch (Exception e) {
			response.setEntity(album);
			response.setStatus("ERROR");
			response.setResponseText(e.getMessage());
		}
		return response;
	}
}
