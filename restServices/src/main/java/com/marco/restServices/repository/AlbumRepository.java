package com.marco.restServices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marco.restServices.entity.Album;

public interface AlbumRepository extends JpaRepository <Album, Integer> {

}
