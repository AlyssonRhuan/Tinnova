package com.alysson.veiculos.veiculos.resource;

import java.util.List;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alysson.veiculos.veiculos.domain.Vehicle;
import com.alysson.veiculos.veiculos.service.VehicleService;

@RestController 
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping(value = "/veiculos")
public class VehicleResource {
	
	@Autowired
	private VehicleService vehicleService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Vehicle>> getAll() throws Exception {
		List<Vehicle> listVehicles = vehicleService.getAll();
		return ResponseEntity.ok(listVehicles);
	}

	@RequestMapping(value="/find", method = RequestMethod.GET)
	public ResponseEntity<List<Vehicle>> getAllByParam(String q) {
		List<Vehicle> listVehicles = vehicleService.getAllByParam(q);
		return ResponseEntity.ok(listVehicles);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.GET)
	public ResponseEntity<Vehicle> getById(@PathVariable Long id) {
		Vehicle vehicle = vehicleService.getById(id);
		return ResponseEntity.ok(vehicle);
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Vehicle> create(@RequestBody Vehicle vehicle) throws Exception {
		vehicle.setId(null);
		vehicle = vehicleService.save(vehicle);
		return ResponseEntity.ok(vehicle);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Vehicle> update(@PathVariable Long id, @RequestBody Vehicle vehicle) throws Exception {
		vehicle.setId(id);
		vehicle = vehicleService.save(vehicle);
		return ResponseEntity.ok(vehicle);
	}

	@RequestMapping(value="/{id}/sold/{isSold}", method = RequestMethod.PATCH)
	public ResponseEntity<Vehicle> updateIsSold(@PathVariable Long id, @PathVariable Boolean isSold) throws Exception {
		Vehicle vehicle =vehicleService.updateIsSold(id, isSold);
		return ResponseEntity.ok(vehicle);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity delete(@PathVariable Long id) throws ConstraintViolationException, Exception {
		vehicleService.delete(id);
		return ResponseEntity.ok("");
	}
}
