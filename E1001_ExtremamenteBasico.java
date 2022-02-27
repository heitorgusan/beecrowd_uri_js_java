package beecrownd_uri_java;

import java.util.Scanner;

public class E1001_ExtremamenteBasico {

	public static void main(String[] args) {
		
		Scanner leitura = new Scanner(System.in);
		
		int a = leitura.nextInt();
		int b = leitura.nextInt();
		
		leitura.close();
		int x = a+b;
		
		System.out.println("X = "+x);
		
	}

}
