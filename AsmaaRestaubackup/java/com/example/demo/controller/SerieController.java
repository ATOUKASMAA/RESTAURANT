package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Serie;
import com.example.demo.repository.SerieRepository;
import org.slf4j.LoggerFactory;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;@RestController
@RequestMapping("Series")
public class SerieController {
	Logger logger = LoggerFactory.getLogger(SerieController.class);
	@Autowired
	private SerieRepository serieRepository;
	
	@PostMapping("/save")
	public void save(@RequestBody Serie Serie){
		serieRepository.save(Serie);
}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
	Serie s = serieRepository.findById(Integer.parseInt(id));
	serieRepository.delete(s);
	}
	
	@GetMapping("/all")
	public List<Serie> findAll(){
	return serieRepository.findAll();
	}

	@GetMapping(value = "/count")
	public long countSerie() {
	return serieRepository.count();
	}
	  @GetMapping("/fetch/{id}")
	    @ApiOperation("Returns Serie based in serie id .")
	    public Serie getSerieById(@PathVariable  String  id){
	        return serieRepository.getSerieById(id);
	    }
}
