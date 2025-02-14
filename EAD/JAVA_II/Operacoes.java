import java.util.Scanner;

public class Operacoes {
    
    public void menu() {
        System.out.flush();
        System.out.println("################");
        System.out.println("Escolha uma operação: ");
        System.out.println("1 - Potenciação");
        System.out.println("2 - Radiciação");
        System.out.println("3 - Raiz cúbica");
        System.out.println("################");
    }
    
    public  static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o primeiro número: ");
        double num1 = scanner.nextDouble();
        System.out.println("Digite o segundo número: ");
        double num2 = scanner.nextDouble();
        System.out.flush();
        Operacoes operacoes = new Operacoes();
        operacoes.menu();
        int opcao = scanner.nextInt();
        switch (opcao) {
            case 1:
                System.out.printf("%f elevado a %f: %f", num1, num2, Math.pow(num1, num2));
                break;
            case 2:
                System.out.printf("Raiz quadrada de %f: %f \n", num1, Math.sqrt(num1));
                System.out.printf("Raiz quadrada de %f: %f \n", num2, Math.sqrt(num2));
                break;
            case 3:
                System.out.printf("Raiz cúbica de %f: %f", num1, Math.cbrt(num1));
                System.out.printf("Raiz cúbica de %f: %f", num2, Math.cbrt(num2));
                break;
            default:
                System.out.println("Operação inválida");
                System.exit(1);
        }
        scanner.close();
    }
}
