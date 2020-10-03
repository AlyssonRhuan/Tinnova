package com.alysson.fatorial;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		int fatorial = 0;
		int auxiliar = fatorial;		

		try {
			Scanner sc = new Scanner(System.in);
			System.out.println("Digite o valor a ser calculado:"); 
			fatorial = Integer.parseInt(sc.nextLine()); 
	
			System.out.print(fatorial + "! = ");
			
			while(fatorial > 1) {
				auxiliar = auxiliar * ( fatorial - 1 );
				fatorial--;
			}
			
			System.out.print(auxiliar);
		}
		catch(Exception e) {
			System.out.print("Houve um erro, tente novamente.");
		}
	}
}
