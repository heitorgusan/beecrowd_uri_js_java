package beecrownd_uri_java;

import java.util.Scanner;

public class E1074 {

	public static void main (String [] args) {
		Scanner leitor = new Scanner(System.in);
		
		int qtdeTestes = leitor.nextInt();
		int provisorio = 0;
		for(int i = 0 ; i < qtdeTestes; i++) {
			
			provisorio = leitor.nextInt();
			if(provisorio == 0 ) {
				System.out.println("NULL");
				continue;
			}
			
			if(provisorio % 2 == 0 ) {
				if(provisorio > 0) {
					System.out.println("EVEN POSITIVE");
					continue;
				}else {
					System.out.println("EVEN NEGATIVE");
					continue;
				}
			}else {
				if(provisorio > 0) {
					System.out.println("ODD POSITIVE");
					continue;
				}else {
					System.out.println("ODD NEGATIVE");
					continue;
				}
			}
		}
		leitor.close();
	}
	
	
}
