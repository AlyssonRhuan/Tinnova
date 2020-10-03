package com.alysson.ordenacao;

public class Main {

	public static void main(String[] args) {
		int[] numeros = {5, 3, 2, 4, 7, 1, 0, 6};

		for(int i = 0; i < numeros.length - 1; i++) {
			for(int j = 0; j < numeros.length - 1; j++) {
				if(numeros[j] > numeros[j+1]) {
					int auxiliar = numeros[j];
					numeros[j] = numeros[j+1];
					numeros[j+1] = auxiliar;
				}
			}
		}

		for(int i = 0; i < numeros.length - 1; i++) {
			System.out.print(numeros[i]);
		}		
	}
}
