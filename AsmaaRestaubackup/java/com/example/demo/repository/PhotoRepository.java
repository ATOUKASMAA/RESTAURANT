package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {

	
	Photo findById(int id);

	@Query("select p from Photo p where p.url = :url")
	List<Photo> findByUrl(String url);
	

}
