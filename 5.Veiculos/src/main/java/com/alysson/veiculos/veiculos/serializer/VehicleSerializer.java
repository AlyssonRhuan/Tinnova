package com.alysson.veiculos.veiculos.serializer;

import java.io.IOException;

import com.alysson.veiculos.veiculos.domain.Vehicle;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class VehicleSerializer extends JsonSerializer<Vehicle> {

	@Override
	public void serialize(final Vehicle vehicle, 
			final JsonGenerator jsonGenerator, final SerializerProvider serializers)
			throws IOException {		
		jsonGenerator.writeStartObject();
		
		jsonGenerator.writeNumberField("id", vehicle.getId());
		jsonGenerator.writeStringField("vehicle", vehicle.getVehicle());
		jsonGenerator.writeStringField("brand", vehicle.getBrand());
		jsonGenerator.writeNumberField("year", vehicle.getYear());
		jsonGenerator.writeStringField("description", vehicle.getDescription());
		jsonGenerator.writeBooleanField("isSold", vehicle.getIsSold());
		jsonGenerator.writeStringField("created", vehicle.getCreated().toString());
		jsonGenerator.writeStringField("updated", vehicle.getUpdated().toString());
		
		jsonGenerator.writeEndObject();
	}
}
