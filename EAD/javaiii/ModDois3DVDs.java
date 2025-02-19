import java.util.Scanner;


public class ModDois3DVDs {
    public static void main(String[] args) {
        final int tamanho = 8;
        Scanner sc = new Scanner(System.in);
        String[] nomes = new String[tamanho];
        int[] locacoes = new int[tamanho];
        int count = 0;
        while(count < tamanho) {
            System.out.println("Informe o nome do cliente: ");
            String nome = sc.nextLine();
            System.out.println("Informe a quantidade de DVDs locados: ");
            String input = sc.nextLine();
            while (!input.matches("\\d+")) {
                System.out.println("Informe a quantidade de DVDs locados: ");
                input = sc.nextLine();
            }
            int numero = Integer.parseInt(input);
            nomes[count] = nome;
            locacoes[count] = numero;
            count++;
        }
        for (int i = 0; i < tamanho; i++) {
            int gratis = Math.round(locacoes[i] / 10);
            if (gratis > 0) {
                System.out.println("___________________________");
                System.out.printf("Cliente nome %s\n", nomes[i]);
                System.out.printf("Locações grátis %d \n", gratis);
                System.out.println("___________________________");
            }
        }
        sc.close();
    }
}
