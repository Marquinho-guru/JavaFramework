package com.marco.restServices.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.function.ServerResponse;

import com.marco.restServices.entity.Album;
import com.marco.restServices.entity.Songs;
import com.marco.restServices.entity.StandardResponse;
import com.marco.restServices.exceptions.EmptyValueException;
import com.marco.restServices.repository.SongRepository;
import com.marco.restServices.util.UtilConstants;

@Service
public class SongService {

	@Autowired
	private SongRepository songRepository;
	private Songs song;
	
	public List<Songs> findAll(){
		return songRepository.findAll();
	}
	
	public StandardResponse<Songs> create(Songs song){
		StandardResponse<Songs> response = new StandardResponse<>();
		try {
			Double.parseDouble(song.getTime());
			if (song.checkEmpty()) {
				throw new EmptyValueException("All fields are required");
			}			
			response.setEntity(songRepository.save(song));
			response.setStatus(UtilConstants.SUCCESS_MSG);
			response.setResponseText("Song Saved");
		} catch (EmptyValueException e) {
			response.setEntity(null);
			response.setStatus(UtilConstants.ERROR_MSG);
			response.setResponseText(e.getMessage());
		} catch (NumberFormatException e) {
			response.setEntity(null);
			response.setStatus(UtilConstants.ERROR_MSG);
			response.setResponseText("Invalid time value!");
		}catch (Exception e) {
			response.setEntity(null);
			response.setStatus(UtilConstants.ERROR_MSG);
			response.setResponseText(e.getMessage());
		}
		return response;
	}
	
	public List<Songs> findByAlbumId(Integer albumId){
		return songRepository.findByAlbumId(albumId);
	}
	
	public Songs findById(Integer id) {
		return songRepository.getOne(id);
	}
	
	public StandardResponse<Songs> deleteById(Integer id){
		StandardResponse<Songs> response = new StandardResponse<>();
		try {
			response.setEntity(findById(id));
			songRepository.deleteById(id);
			response.setStatus(UtilConstants.SUCCESS_MSG);
			response.setResponseText("Song with Id: "+ id + " deleted!");
		} catch (Exception e) {
			response.setEntity(null);
			response.setStatus(UtilConstants.ERROR_MSG);
			response.setResponseText(e.getMessage());
		}
		return response;
	}


public StandardResponse<Songs> update(Songs song){
	StandardResponse<Songs> response = new StandardResponse<>();
	try {
		songRepository.getOne(song.getId());
		response.setEntity(songRepository.save(song));
		response.setStatus("SUCCESS");
		response.setResponseText("Song with Id:"+  song.getId() + " update!");
	}catch (Exception e) {
		response.setEntity(song);
		response.setStatus("ERROR");
		response.setResponseText(e.getMessage());
	}
	return response;
}
}