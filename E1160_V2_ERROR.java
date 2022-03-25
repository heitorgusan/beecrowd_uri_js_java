package beecrownd;

import java.util.Scanner;

public class E1160_V2_ERROR {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner leitor = new Scanner(System.in);
		
		int t = leitor.nextInt();
		int pa, pb ;
		float g1,g2;
		leitor.nextLine();
		
		for(int i = 0; i < t; i ++) {
			int tempo = 0;
			
			pa = leitor.nextInt();
			leitor.nextLine();
			pb = leitor.nextInt();
			leitor.nextLine();
			
			g1 = leitor.nextFloat();
			leitor.nextLine();
			g2 = leitor.nextFloat();
			
			do {
				tempo++;
				pa += pa * (g1/100);
				pb += pb * (g2/100);
				if(tempo > 100) {
					break;
				}
				
			}while(pa<=pb);
			if(tempo <= 100) {
				
				System.out.println(tempo + " anos.");
			}else {
				System.out.println("Mais de 1 seculo.");
			}
		}
		
		
	}

}
