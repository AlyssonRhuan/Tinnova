package com.alysson.veiculos.veiculos.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alysson.veiculos.veiculos.domain.Vehicle;
import com.alysson.veiculos.veiculos.repository.VechicleRepository;
import com.alysson.veiculos.veiculos.service.exceptions.ObjectNotFoundException;

@Service
public class VehicleService {
	
	@Autowired
	private VechicleRepository vechicleRepository;
	
	public List<Vehicle> getAll() {
		return vechicleRepository.findAll();
	}

	public List<Vehicle> getAllByParam(String query) {
		return vechicleRepository.findByVehicleOrBrand(query);
	}

	public Vehicle getById(Long id) throws ObjectNotFoundException {
		Optional<Vehicle> vehicle = vechicleRepository.findById(id);		
		return vehicle.orElseThrow(() -> new ObjectNotFoundException(
				"Vehicle not found!"));
	}

	public Vehicle save(Vehicle vehicle) throws Exception {
		if(vehicle.isNew()) {
			vehicle.setCreated(new Date());
		}
		else {
			Date created = vechicleRepository.getCreatedData(vehicle.getId());
			vehicle.setCreated(created);
		}
		
		vehicle.setUpdated(new Date());
		
		return vechicleRepository.save(vehicle); 
	}

	public Vehicle updatePatch(Long id, Vehicle vehicle) {
		return vechicleRepository.save(vehicle); 
	}

	public void delete(Long id) throws ConstraintViolationException, Exception {	
		Vehicle vehicle = this.getById(id);
		vechicleRepository.delete(vehicle);
	}

	public Vehicle updateIsSold(Long id, Boolean isSold) {
		Vehicle vehicle = getById(id);
		vehicle.setIsSold(isSold);
		return vechicleRepository.save(vehicle); 
	}
}
