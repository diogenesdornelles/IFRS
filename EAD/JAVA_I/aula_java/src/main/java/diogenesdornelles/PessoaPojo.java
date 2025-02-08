package diogenesdornelles;

//  Classes de Modelos (POJOs)
// Uma classe que apenas armazena dados não precisa de main.
// não precisa de main


// Não 'rodam' sozinhas, precisam de um programa principal
// public class Teste {
//     public static void main(String[] args) {
//         Pessoa p = new Pessoa("Alice", 30);
//         p.exibirInfo(); // Saída: Nome: Alice, Idade: 30
//     }
// }


public class PessoaPojo {
    String nome;
    int idade;

    // Construtor
    public void Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para exibir os dados
    public void exibirInfo() {
        System.out.println("Nome: " + nome + ", Idade: " + idade);
    }
}