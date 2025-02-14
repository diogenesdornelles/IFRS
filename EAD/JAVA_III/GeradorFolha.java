import java.util.ArrayList;
import java.util.Scanner;

class Descontos {
    public double forPlanoSaude(double base) {
        return base * 0.045;
    }

    public double forIR (double base) {
        if (base <= 1903.98) {
            return 0.0;
        } else if (base <= 2826.65) {
            return base * 0.075;
            
        } else if (base <= 3751.05) {
            return base * 0.15;
            
        } else if (base <= 4664.68) {
            return base * 0.225;
            
        } else {
            return base * 0.275;
        }
    }
    public double forINSS(double base) {
        if (base <= 1693.72) {
            return base * 0.08;
        } else if (base <= 2882.90) {
            return base * 0.09;
            
        } else {
            return base * 0.11;
        }    
    }
}


class Funcionario {
    private double salario;

    // Construtor
    public Funcionario(double salario) {
        this.salario = salario;
    }

    // Getters
    public double getSalario() {
        return salario;
    }
}


class Empresa {
    private ArrayList<Funcionario> funcionarios;

    public Empresa() {
        this.funcionarios = new ArrayList<>();
    }

    // Construtor
    public void add(Funcionario funcionario) {
        this.funcionarios.add(funcionario);
    }

    public ArrayList<Funcionario> getFuncionarios() {
        return this.funcionarios;
    }

}


public class GeradorFolha {
    public Empresa empresa = new Empresa();

    public void salariosLiquidos() {
        Descontos descontos = new Descontos();
        for (Funcionario funcionario : empresa.getFuncionarios()) {
            System.out.println("----------------------------------");
            double salario = funcionario.getSalario();
            System.out.printf("SALÁRIO BRUTO: %.2f\n", salario);
            double desconto = descontos.forIR(salario);
            salario -= desconto;
            System.out.printf("Desconto IR: %.2f\n", desconto);
            desconto = descontos.forINSS(salario);
            salario -= desconto;
            System.out.printf("Desconto INSS: %.2f\n", desconto);
            desconto = descontos.forPlanoSaude(salario);
            salario -= desconto;
            System.out.printf("Desconto Plano de Saúde: %.2f\n", desconto);
            System.out.printf("SALÁRIO LÍQUIDO: %.2f\n", salario);
            System.out.println("----------------------------------");
        }
    }

    public void totalFolha() {
        double total = 0.0;
        for (Funcionario funcionario : empresa.getFuncionarios()) {
            total += funcionario.getSalario();
        }
        System.out.printf("TOTAL FOLHA: %.2f\n", total);
        System.out.println("----------------------------------");
    }

    public void totalImpostos() {
        double impostos = 0.0;
        Descontos descontos = new Descontos();
        for (Funcionario funcionario : empresa.getFuncionarios()) {
            double salario = funcionario.getSalario();
            double desconto = descontos.forIR(salario);
            salario -= desconto;
            impostos += desconto;
            desconto = descontos.forINSS(salario);
            salario -= desconto;
            impostos += desconto;
        }
        System.out.printf("IMPOSTOS: %.2f\n", impostos);
        System.out.println("----------------------------------");
    }
    
    
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input;
        GeradorFolha geradorFolha = new GeradorFolha(); 
        double salario;
        while (true) {
            System.out.println("Informe o salário do empregado (...xxx.xx): ");
            input = sc.nextLine();
            while (!input.matches("\\d+\\.\\d{2}")) {
                System.out.println("Informe o salário do empregado (...xxx.xx): ");
                input = sc.nextLine();
            }
            salario = Double.parseDouble(input);
            Funcionario funcionario = new Funcionario(salario);
            geradorFolha.empresa.add(funcionario);
            // Perguntar se deseja continuar
            System.out.println("Deseja continuar cadastrando? (S/N):");
            char resposta = sc.nextLine().toUpperCase().charAt(0);
            while (resposta != 'S' && resposta != 'N') {
                System.out.println("Entrada inválida! Informe corretamente (S/N):");
                resposta = sc.nextLine().toUpperCase().charAt(0);
            }
            if (resposta == 'N') {
                break;
            }
        }
        geradorFolha.salariosLiquidos();
        geradorFolha.totalFolha();
        geradorFolha.totalImpostos();
        sc.close();
    }
}
