/*Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. 
Cada caso de teste consiste de dois inteiros X e Y. 
Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos 
de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma de todos valores ímpares entre X e Y.
*/

package beecrownd;

import java.util.Scanner;

public class E1099 {

	public static void main (String[]args) {
		Scanner ler = new Scanner(System.in);
		int qtdeDados = ler.nextInt();
		int x[] = new int[2];
		int soma = 0;
		for(int i = 0 ; i < qtdeDados; i++) {
			for(int j = 0 ; j < x.length ; j++) {
				x[j] = ler.nextInt();
			}
			
			int maior = x[1];
			int menor = x[0];
			
			if(x[0]>x[1]) {
				maior = x[0];
				menor = x[1];
			}
			soma = 0;
			
			for(int z = menor+1 ; z < maior; z++) {
				if(z % 2 != 0 ) {
					soma+=z;
				}
			}
			System.out.println(soma);
		}
		
		
	}
	
}
