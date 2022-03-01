package beecrownd;

import java.util.Scanner;

public class E1158 {
	public static void main (String[] args) {
		Scanner ler = new Scanner(System.in);
		int qtdeCasos = ler.nextInt();
		int impares[][] = new int[qtdeCasos][2];
		int soma = 0;
		int somaImpar =0;
		for(int i = 0 ; i< impares.length; i++) {
			
			for(int j = 0; j < 2 ; j++) {
				impares[i][j] = ler.nextInt();
			}
		}
		
		for(int i = 0; i < impares.length ; i++) {
			soma = 0;
			somaImpar = 0;
			for(int j= impares[i][0] ; somaImpar < impares[i][1]; j++) {
				
				if(j%2 !=0) {
					soma+=j;
					somaImpar++;
				}
				
			}
			System.out.println(soma);
		}
		
		ler.close();
	}

}
