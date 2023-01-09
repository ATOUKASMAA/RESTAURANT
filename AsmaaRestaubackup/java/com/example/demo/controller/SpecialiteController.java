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
import com.example.demo.model.Specialite;
import com.example.demo.repository.SpecialiteRepository;

@RestController
@RequestMapping("Specialites")
public class SpecialiteController {
@Autowired
private SpecialiteRepository specialiteRepository;
@PostMapping("/save")
public void save(@RequestBody  Specialite specialite){
	specialiteRepository.save(specialite);
}
@DeleteMapping("/delete/{id}")
public void delete(@PathVariable (required = true) String id){
	Specialite s = specialiteRepository.findById(Integer.parseInt(id));
	specialiteRepository.delete(s);
}
@GetMapping("/all")
public List<Specialite> findAll(){
return specialiteRepository.findAll();
}
@GetMapping(value = "/count")
public long countSpecialite() {
return specialiteRepository.count();
}

}
