package com.alysson.multiplos;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		int valorLimite = 0;	
		int somaMultiplos = 0;

		try {
			Scanner sc = new Scanner(System.in);
			System.out.println("Digite o valor limite:"); 
			valorLimite = Integer.parseInt(sc.nextLine());
			
			for(int i = 1; i < valorLimite; i++){
				if(i % 3 == 0 || i % 5 == 0) {
					somaMultiplos += i;		
				}
			}
			
			System.out.println("A soma dos multiplos de 3 e 5 até " + valorLimite + " é " + somaMultiplos); 
		}
		catch(Exception e) {
			System.out.print("Houve um erro, tente novamente.");
		}
	}
}
