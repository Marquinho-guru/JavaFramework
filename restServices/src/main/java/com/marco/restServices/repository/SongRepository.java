package com.marco.restServices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marco.restServices.entity.Songs;

public interface SongRepository extends JpaRepository<Songs, Integer>{

	public List <Songs> findByAlbumId(Integer albumId); 	
	
}
