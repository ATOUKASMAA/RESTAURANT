package com.example.demo.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Restaurant;
import com.example.demo.model.Serie;
import com.example.demo.model.Zone;


	public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
        Restaurant findById(int id);
      
        @Query("select r from Restaurant r where r.nom = ?1")
    	List<Restaurant> findByNom(String nom);

    	@Query("select r from Restaurant r where r.adresse = ?1")
    	List<Restaurant> findByAdresse(String adresse);
    	
    	@Query("select r from Restaurant r where r.rank = ?1 order by nom desc")
    	List<Restaurant> findByRank(int rank);
    	
    	@Query("select r from Restaurant r where r.zone like ?1")
    	List<Restaurant> findByZone(Zone zone);
    	

    	@Query("select r from Restaurant r where r.serie like ?1")
    	List<Restaurant> findBySerie(Serie serie);
        /*@Query("select rank(r.rank) as rank, count(*) as nbr from Restaurant r group by rank(r.rank) order by rank(r.rank)")
        Collection<?> findByRestaurantRank();  */
        
    
}
	