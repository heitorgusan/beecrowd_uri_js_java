package beecrownd;

import java.util.Scanner;

/*
Escreva um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível mostre a mensagem “divisao impossivel” para os valores em questão.

Entrada
A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

Saída
Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.

Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens como o C e C++ gera outro inteiro. Utilize cast :)
*/
public class E1116 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner leitor = new Scanner(System.in);
		int qtdeValores = leitor.nextInt();
		float divisores[][] = new float[qtdeValores][2];
		float resultado = 0;
		
		for(int i = 0 ; i < divisores.length ; i++) {
			
			for(int j = 0 ; j < 2 ; j++) {
				divisores[i][j] = leitor.nextFloat();
			}
			
			if(divisores[i][1] != 0 ) {
				resultado = divisores[i][0]/divisores[i][1];
				System.out.printf("%.1f\n",resultado);
			}else {
				System.out.println("divisao impossivel");
			}
		}
		
		
	}

}
