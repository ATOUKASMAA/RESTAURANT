package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Restaurant;
import com.example.demo.model.Serie;
import com.example.demo.model.Zone;
import com.example.demo.repository.RestaurantRepository;

@RestController
@RequestMapping("Restaurants")
public class RestaurantController {
	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@PostMapping("/save")
	public void save(@RequestBody Restaurant restaurant){
		restaurantRepository.save(restaurant);
}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
	Restaurant s = restaurantRepository.findById(Integer.parseInt(id));
	restaurantRepository.delete(s);
	}
	
	@GetMapping("/all")
	public List<Restaurant> findAll(){
	return restaurantRepository.findAll();
	}

	@GetMapping(value = "/count")
	public long countRestaurant() {
	return restaurantRepository.count();
	}
	/*@GetMapping(value = "/byRank")
	public Collection<?> findByRestaurantRank() {
	return restaurantRepository.findByRestaurantRank();
	}*/
	@GetMapping("/zone/{zone}")
	public List<Restaurant> findByZone(@RequestParam(required = false) Zone zone) {
		return restaurantRepository.findByZone(zone);
	}
	
	@GetMapping("/serie/{serie}")
	public List<Restaurant> findBySerie(@RequestParam(required = false) Serie serie) {
		return restaurantRepository.findBySerie(serie);
	}
	
}
