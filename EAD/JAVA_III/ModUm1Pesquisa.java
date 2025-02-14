import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

class Pessoa {
    private char sexo;
    private int idade;
    private double salario;

    // Construtor
    public Pessoa(char sexo, int idade, double salario) {
        this.sexo = sexo;
        this.idade = idade;
        this.salario = salario;
    }

    // Getters (poderiam ter setters, se necessário)
    public char getSexo() {
        return sexo;
    }
    
    public int getIdade() {
        return idade;
    }
    
    public double getSalario() {
        return salario;
    }

    @Override
    public String toString() {
        return "Pessoa [sexo=" + sexo + ", idade=" + idade + ", salario=" + salario + "]";
    }
}

public class ModUm1Pesquisa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Pessoa> pessoas = new ArrayList<>();
        ArrayList<Pessoa> mulheresSalarioAte1500 = new ArrayList<>();
        String[] keys = {"idade", "sexo", "salario"};
        double media = 0.0;

        // Entrada de dados: encerra quando a idade informada for negativa
        while (true) {
            // Cria um novo HashMap para cada pessoa
            HashMap<String, Object> pessoaMap = new HashMap<>();
            
            // Lê os dados de cada atributo
            for (String key : keys) {
                System.out.printf("Informe o(a) %s: \n", key);
                switch (key) {
                    case "idade": 
                        int idade = Integer.parseInt(sc.nextLine());
                        pessoaMap.put(key, idade);
                        break;
                    case "sexo": 
                        pessoaMap.put(key, sc.nextLine().charAt(0));
                        break;
                    case "salario": 
                        pessoaMap.put(key, Double.parseDouble(sc.nextLine()));
                        break;
                }
            }
            
            // Se a idade for negativa, encerra a entrada
            int idade = (Integer) pessoaMap.get("idade");
            if (idade < 0) {
                break;
            }
            
            // Cria o objeto Pessoa e adiciona à lista
            pessoas.add(new Pessoa(
                (char) pessoaMap.get("sexo"), 
                idade, 
                (Double) pessoaMap.get("salario")
            ));
        }
        
        sc.close();
        
        // Exibe todas as pessoas cadastradas
        System.out.println("\nPessoas cadastradas:");
        for (Pessoa p : pessoas) {
            System.out.println(p);
        }
        
        // Se houver ao menos uma pessoa, processa os dados
        if (!pessoas.isEmpty()) {
            // Inicializa as variáveis com o primeiro elemento da lista
            Pessoa maiorIdade = pessoas.get(0);
            Pessoa menorIdade = pessoas.get(0);
            Pessoa menorSalario = pessoas.get(0);
            double somaSalarios = 0.0;
            
            // Percorre a lista para calcular as variáveis
            for (Pessoa p : pessoas) {
                somaSalarios += p.getSalario();
                
                if (p.getIdade() > maiorIdade.getIdade()) {
                    maiorIdade = p;
                }
                if (p.getIdade() < menorIdade.getIdade()) {
                    menorIdade = p;
                }
                if (p.getSalario() < menorSalario.getSalario()) {
                    menorSalario = p;
                }
                
                // Considera mulheres (sexo 'F' ou 'f') com salário até 1500
                if (Character.toUpperCase(p.getSexo()) == 'F' && p.getSalario() <= 1500.0) {
                    mulheresSalarioAte1500.add(p);
                }
            }
            
            // Calcula a média dos salários
            media = somaSalarios / pessoas.size();
            
            // Exibe os resultados
            System.out.printf("\nMédia dos salários: %.2f\n", media);
            System.out.println("Pessoa com maior idade: " + maiorIdade);
            System.out.println("Pessoa com menor idade: " + menorIdade);
            System.out.println("Pessoa com menor salário: " + menorSalario);
            
            System.out.println("\nMulheres com salário até 1500:");
            for (Pessoa p : mulheresSalarioAte1500) {
                System.out.println(p);
            }
        } else {
            System.out.println("Nenhuma pessoa cadastrada.");
        }
    }
}
