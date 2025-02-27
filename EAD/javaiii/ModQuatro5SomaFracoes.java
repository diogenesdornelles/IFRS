import java.util.Scanner;

public class ModQuatro5SomaFracoes {
    public static boolean ePrimo(int n) {
        if (n < 2)
            return false; // números menores que 2 não são primos
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }

    public static int mmc(int a, int b) {
        int res = 1;
        int maior = a > b ? a : b;
        for (int i = 0; i <= maior; i++) {
            if (ePrimo(i)) {
                boolean eFator = true;
                while (eFator) {
                    if ((a % i == 0) && (b % i == 0)) {
                        a /= i;
                        b /= i;
                        res *= i;
                    } else if (a % i == 0) {
                        a /= i;
                        res *= i;
                    } else if (b % i == 0) {
                        b /= i;
                        res *= i;
                    } else {
                        eFator = false;
                    }
                }
            }
        }
        return res;

    }

    public static void main(String[] args) {
        // utiliza a série de Maclaurin para aproximar o valor de 𝑒𝑥

        Scanner sc = new Scanner(System.in);
        int n1, n2, d1, d2;

        System.out.println("Informe n1: ");
        // Validação
        while (!sc.hasNextInt()) {
            System.out.printf("Valor inválido! Informe n1: ");
            sc.next(); // descartar uma entrada inválida
        }
        n1 = sc.nextInt();

        System.out.println("Informe d1: ");
        // Validação
        while (!sc.hasNextInt()) {
            System.out.printf("Valor inválido! Informe d1: ");
            sc.next(); // descartar uma entrada inválida
        }
        d1 = sc.nextInt();

        System.out.println("Informe n2: ");
        // Validação
        while (!sc.hasNextInt()) {
            System.out.printf("Valor inválido! Informe n2: ");
            sc.next(); // descartar uma entrada inválida
        }
        n2 = sc.nextInt();

        System.out.println("Informe d2: ");
        // Validação
        while (!sc.hasNextInt()) {
            System.out.printf("Valor inválido! Informe d2: ");
            sc.next(); // descartar uma entrada inválida
        }
        d2 = sc.nextInt();
        int m = mmc(d1, d2);
        System.out.printf("%d/%d + %d/%d = %d/%d \n", n1, d1, n2, d2, n1 * (m / d1) + n2 * (m / d2), m);
        sc.close();

    }
}
