package com.alysson.veiculos;

public class Main {

	public static void main(String[] args) {
		Votos votos = new Votos();
		votos.setTotalEleitores(1000);
		votos.setValidos(800);
		votos.setBrancos(150);
		votos.setNulos(50);	

		porcentagemValidos(votos);
		porcentagemBrancos(votos);
		porcentagemNulos(votos);		
	}
	
	public static void porcentagemValidos(Votos votos) {
		double porcentagem = ( votos.getValidos() * 100 ) / votos.getTotalEleitores();
		System.out.println("Porcentagem de votos válidos: " + porcentagem + "%");
	}
	
	public static void porcentagemBrancos(Votos votos) {
		double porcentagem = ( votos.getBrancos() * 100 ) / votos.getTotalEleitores();
		System.out.println("Porcentagem de votos brancos: " + porcentagem + "%");
	}
	
	public static void porcentagemNulos(Votos votos) {
		double porcentagem = ( votos.getNulos() * 100 ) / votos.getTotalEleitores();
		System.out.println("Porcentagem de votos nulos: " + porcentagem + "%");
	}
}
