import java.util.Scanner;

public class ModDois2Sum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int tamanho = 5;
        int[] numeros = new int[tamanho];
        for (int i = 0; i < tamanho; i++) {
            
            System.out.printf("Digite o %dº número: ", i + 1);
            String input = sc.nextLine();
            
            while (!input.matches("\\d+")) {
                System.out.printf("Digite o %dº número: ", i + 1);
                input = sc.nextLine();
            }
            numeros[i] = Integer.parseInt(input);
        }
        System.out.println("Os números digitados foram: ");
        int soma = 0;
        for (int k = 0; k < tamanho; k++) {
            if (k == tamanho -1) {
                System.out.printf(" %d =", numeros[k]);
            } else {
                System.out.printf(" %d +", numeros[k]);
            }
            
            soma += numeros[k];
        }
        System.out.printf(" %d\n", soma);
        sc.close();
    }
}
