import java.util.Scanner;
import java.math.BigInteger;

public class ModUm10Primo {

    public boolean ePrimo(long n) {
        for (long d = 2; d < n; d++) {
            if ((double) n % (double) d == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("Informe um inteiro maior que 1: ");
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        ModUm10Primo mod = new ModUm10Primo();
        while (!input.matches("\\d+")) {
            System.out.println("Informe um inteiro maior que 1: ");
            input = sc.nextLine();
        }
        long numero  = Long.parseLong(input);
        if (mod.ePrimo(numero)) {
            System.out.printf("O número %d é primo\n", numero);
        } else {
            System.out.printf("O número %d não é primo\n", numero);
        }
    sc.close();
    }
}
