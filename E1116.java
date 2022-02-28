package beecrownd;

import java.util.Scanner;

/*
Escreva um algoritmo que leia 2 n�meros e imprima o resultado da divis�o do primeiro pelo segundo. Caso n�o for poss�vel mostre a mensagem �divisao impossivel� para os valores em quest�o.

Entrada
A entrada cont�m um n�mero inteiro N. Este N ser� a quantidade de pares de valores inteiros (X e Y) que ser�o lidos em seguida.

Sa�da
Para cada caso mostre o resultado da divis�o com um d�gito ap�s o ponto decimal, ou �divisao impossivel� caso n�o seja poss�vel efetuar o c�lculo.

Obs.: Cuide que a divis�o entre dois inteiros em algumas linguagens como o C e C++ gera outro inteiro. Utilize cast :)
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
