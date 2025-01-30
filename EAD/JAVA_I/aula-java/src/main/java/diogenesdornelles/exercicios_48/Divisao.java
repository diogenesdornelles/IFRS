import java.util.InputMismatchException;
import java.util.Scanner;

class Divisao {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.println("### Divisão ####");
        System.out.print("Entre com o primeiro número: ");
        double N1 = scan.nextDouble();
        double N2 = 0.0;
        
        while (true) {
            try {
                System.out.print("Entre com o segundo número (diferente de zero): ");
                N2 = scan.nextDouble();
                
                // Verifica se o número é zero para evitar divisão inválida
                if (N2 == 0.0) {
                    System.out.println("Erro: O divisor não pode ser zero. Tente novamente.");
                    continue;
                }
                break; // Sai do loop se N2 for válido
            } catch (InputMismatchException e) {
                System.out.println("Erro: Entrada inválida. Digite um número válido.");
                scan.nextLine(); // Limpa o buffer do scanner para evitar loop infinito
            }
        }

        double resultado = N1 / N2;
        System.out.println("Resultado: " + resultado);
        
        scan.close();
    }
}