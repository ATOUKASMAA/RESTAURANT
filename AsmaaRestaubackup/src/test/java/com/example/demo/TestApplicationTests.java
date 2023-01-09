package com.example.demo;



import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import com.example.demo.model.Restaurant;
import com.example.demo.repository.RestaurantRepository;
@RunWith(SpringRunner.class)
@SpringBootTest
@WebMvcTest
public class TestApplicationTests {

	@Autowired
	RestaurantRepository restaurantRepository;
	@Autowired
	MockMvc mockMvc;

	@Test
	public void contextLoads() throws Exception {

//		MvcResult mvcResult = mockMvc.perform(
//				MockMvcRequestBuilders.get("produits/all").accept(MediaType.APPLICATION_JSON)
//		).andReturn();
//		
//		System.out.println(mvcResult.getResponse());
		
		 Restaurant p = new Restaurant();
		 p.setNom("HP");
		 p.setLat(3000);
		
		
		 restaurantRepository.save(p);

	}

}
