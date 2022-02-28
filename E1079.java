package beecrownd;

import java.util.Scanner;

public class E1079 {
	
	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		
		int qtdeCasos = ler.nextInt();
		int[] pesos = new int[] {2,3,5};		
		float num [][] = new float[qtdeCasos][3];
		float divisor = pesos[0] + pesos[1] + pesos[2];
		float media = 0;
		for(int i = 0; i < qtdeCasos; i++) {
			media = 0;
			for(int j = 0; j < 3 ; j++) {
				num[i][j] = ler.nextFloat();
				media += num[i][j] * pesos[j];
			}
			System.out.printf("%.1f\n", (media/divisor));
		}
		
		ler.close();
	}

}
