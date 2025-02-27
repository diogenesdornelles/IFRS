import java.util.Scanner;

public class ModQuatro2ExpCalculator {
    public static long fatorial(long n) {
        long fat = 1;
        while (n > 0) {
            fat *= n;
            n--;
        }
        System.out.println(fat);
        return fat;
    }
    public static void main(String[] args) {
        //  utiliza a série de Maclaurin para aproximar o valor de 𝑒𝑥
  
        Scanner sc = new Scanner(System.in);

        System.out.println("Informe x: ");
        // Validação
        while (!sc.hasNextDouble()) {
            System.out.printf("Valor inválido! Informe x: ");
            sc.next(); // descartar uma entrada inválida
        }
        double x = sc.nextDouble();
        double ex = 0;
        int termos = 15; // Número de termos na aproximação
        for (int count = 0; count < termos; count++) {
            ex += Math.pow(x, count) / fatorial(count);
        }
        sc.close();
        System.out.printf("e^x: %f\n", ex);
    }
}
