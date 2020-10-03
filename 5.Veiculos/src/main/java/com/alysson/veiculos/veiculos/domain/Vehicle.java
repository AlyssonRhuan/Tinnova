package com.alysson.veiculos.veiculos.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.alysson.veiculos.veiculos.serializer.VehicleSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@JsonSerialize(using = VehicleSerializer.class)
@Entity(name = "tinnova_vehicle")
public class Vehicle implements Serializable {

	private static final long serialVersionUID = 1L;   

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private Long id;

	private String vehicle;
	private String brand;
	private int year;
	private String description;
	private Boolean isSold;	
	private Date created;
	private Date updated;
	
	public Boolean isNew() {
		return id == null ? true : false;
	}	
}
