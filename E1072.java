/*
Faça um programa que leia um vetor X[10].
 Substitua a seguir, todos os valores nulos e negativos do vetor X por 1. Em seguida mostre o vetor X.

Entrada
A entrada contém 10 valores inteiros, podendo ser positivos ou negativos.

Saída
Para cada posição do vetor, escreva "X[i] = x", onde i é a posição do vetor e x é o 
valor armazenado naquela posição.
*/
package beecrownd_uri_java;

import java.util.Scanner;

public class E1072 {

	public static void main(String[] args) {
		
		Scanner leitura = new Scanner(System.in);
		
		int qtdeCasos = leitura.nextInt();
		int in = 0;
		int out = 0;
		int provisorio;
		for(int i = 0 ; i < qtdeCasos; i++) {
			provisorio = leitura.nextInt();
			if(provisorio>=10 && provisorio<=20) {
				in++;
			}else {
				out++;
			}	
		}
		leitura.close();
		System.out.println(in + " in");
		System.out.println(out+ " out");
		
	}
}