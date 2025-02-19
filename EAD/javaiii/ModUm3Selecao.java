import java.util.ArrayList;
import java.util.Scanner;

enum Sexo {
    M, F
}

enum Exp {
    S, N
}

class Candidato {
    private Sexo sexo;
    private int idade;
    private Exp xp;

    // Construtor
    public Candidato(Sexo sexo, int idade, Exp xp) {
        this.sexo = sexo;
        this.idade = idade;
        this.xp = xp;
    }

    // Getters
    public Sexo getSexo() {
        return sexo;
    }

    public int getIdade() {
        return idade;
    }

    public Exp getXp() {
        return xp;
    }

    @Override
    public String toString() {
        return "Candidato [Sexo=" + sexo + ", Idade=" + idade + ", Experiência=" + xp + "]";
    }
}

public class ModUm3Selecao {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Candidato> candidatos = new ArrayList<>();

        int totalMulheres = 0, totalHomens = 0;
        int somaIdadeHomens = 0, somaIdadeMulheresExp = 0, totalMulheresExp = 0;

        while (true) {
            System.out.println("Informe a idade:");

            String input = sc.nextLine().trim();
            // Valida se a entrada contém apenas números
            while (!input.matches("\\d+")) {
                System.out.println("Entrada inválida! Digite uma idade válida (apenas números):");
                input = sc.nextLine().trim();
            }

            int idade = Integer.parseInt(input); // Conversão segura após validação

            System.out.println("Informe o sexo (M/F):");
            char sexoChar = sc.nextLine().toUpperCase().charAt(0);
            while (sexoChar != 'M' && sexoChar != 'F') {
                System.out.println("Entrada inválida! Informe o sexo corretamente (M/F):");
                sexoChar = sc.nextLine().toUpperCase().charAt(0);
            }
            Sexo sexo = Sexo.valueOf(String.valueOf(sexoChar));

            System.out.println("Possui experiência? (S/N):");
            char xpChar = sc.nextLine().toUpperCase().charAt(0);
            while (xpChar != 'S' && xpChar != 'N') {
                System.out.println("Entrada inválida! Informe corretamente (S/N):");
                xpChar = sc.nextLine().toUpperCase().charAt(0);
            }
            Exp xp = Exp.valueOf(String.valueOf(xpChar));

            // Criar candidato e adicionar à lista
            Candidato candidato = new Candidato(sexo, idade, xp);
            candidatos.add(candidato);

            // Contabilizar dados
            if (sexo == Sexo.F) {
                totalMulheres++;
                if (xp == Exp.S) {
                    somaIdadeMulheresExp += idade;
                    totalMulheresExp++;
                }
            } else {
                totalHomens++;
                somaIdadeHomens += idade;
            }

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

        sc.close();

        // Exibir resultados
        System.out.println("\n🔹 RELATÓRIO FINAL 🔹");
        System.out.println("Total de Mulheres: " + totalMulheres);
        System.out.println("Total de Homens: " + totalHomens);
        System.out.println("Média de idade dos Homens: " + (totalHomens > 0 ? (somaIdadeHomens / (double) totalHomens) : "N/A"));
        System.out.println("Média de idade das Mulheres com Experiência: " + (totalMulheresExp > 0 ? (somaIdadeMulheresExp / (double) totalMulheresExp) : "N/A"));

        // Listar todos os candidatos cadastrados
        System.out.println("\n🔹 Lista de Candidatos 🔹");
        for (Candidato c : candidatos) {
            System.out.println(c);
        }
    }
}
