package com.alysson.veiculos.veiculos.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.alysson.veiculos.veiculos.domain.Vehicle;

@Repository
public interface VechicleRepository extends JpaRepository<Vehicle, Long> { 


	@Query("SELECT v FROM tinnova_vehicle v "
			+ "WHERE v.vehicle like '%:query%' "
			+ "OR v.brand like '%:query%' "
		)
	List<Vehicle> findByVehicleOrBrand(
			@Param("query") String query
		);

	@Query("SELECT v.created FROM tinnova_vehicle v "
			+ "WHERE (:id is null or v.id = :id) "
		)
	Date getCreatedData(@Param("id") Long id);
}
