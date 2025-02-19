import java.util.Scanner;

class Calculadora {
    public double novoSalario(double antigo) {
        if (antigo <= 1000.0 ) {
            return antigo * 1.15;
        } else if (antigo <= 3000.0) {
            return antigo * 1.1;
        } else {
            return antigo * 1.05;
        }
    }

    public double ferias(double salario) {
        return salario + (salario * 1.0 / 3.0);
    }

    public double decimoTerceiro(double salario, int meses) {
        if (meses > 12) {
            return salario;
        }
        if (meses < 1) {
            return 0.0;
        }
        return salario * (double) meses / 12.0; 
    }
}


class Menu9App {
    Scanner sc = new Scanner(System.in);
    Calculadora calculadora = new Calculadora();

    protected void clear() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

    protected double salarioInput() {
        System.out.println("Informe o salário do empregado (...xxx.xx): ");
        String input = sc.nextLine();
        while (!input.matches("\\d+\\.\\d{2}")) {
            System.out.println("Informe o salário do empregado (...xxx.xx): ");
            input = sc.nextLine();
        }
        clear();
        return Double.parseDouble(input);
    }

    protected int mesesInput() {
        System.out.println("Informe o número de meses (entre 1 e 12): ");
        String input = sc.nextLine();
        while (!input.matches("\\d+")) {
            System.out.println("Informe o número de meses (entre 1 e 12): ");
            input = sc.nextLine();
        }
        clear();
        return Integer.parseInt(input);
    }

    public void inputManager() {
        
        String input = sc.nextLine();
        while (!input.matches("\\d")) {
            int option = Integer.parseInt(input);
            switch (option) {
                case 1: {
                    System.out.printf("Novo salário: %.2f", calculadora.novoSalario(salarioInput()));
                    break;
                }
                case 2: {
                    System.out.printf("Férias + salário: %.2f", calculadora.ferias(salarioInput()));
                    break;
                }
                case 3: {
                    System.out.printf("Décimo terceiro salário: %.2f", calculadora.decimoTerceiro(salarioInput(), mesesInput()));
                    break;
                }
                case 4: {
                    sc.close(); 
                    System.exit(0);
                    break;
                }
                default: {
                    continue;
                }
            }
        } 
    }

    public void show() {

        clear();
        System.out.println("________________________");
        System.out.println("Menu de opções \n");
        System.out.println("1. Novo salário");
        System.out.println("2. Férias");
        System.out.println("3. Décimo terceiro");
        System.out.println("4. Sair");
        System.out.println("________________________");

    }
}

public class ModUm9App {
    public static void main(String[] args) {
        
        Menu9App menu = new Menu9App();
        while (true) {
            menu.show();
            menu.inputManager();
        }
    }
}
