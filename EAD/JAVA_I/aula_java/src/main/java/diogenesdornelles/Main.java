package diogenesdornelles;

// Nome da Classe e do Arquivo
// O nome da classe pública deve ser o mesmo do arquivo.
// Se sua classe for chamada Main, o arquivo precisa se chamar Main.java.


// O Método main
// O método main é o ponto de entrada de qualquer programa Java.

// Por que main precisa dessa estrutura?
// 🔹 public → Torna o método acessível de qualquer lugar.
// 🔹 static → Permite chamar main sem precisar criar um objeto da classe.
// 🔹 void → Indica que não retorna nada.
// 🔹 String[] args → Permite passar argumentos via terminal.

// Uma classe não precisa ter um método main para existir e funcionar. O main só é obrigatório se você quiser executar o programa diretamente.

// é possível nestar outras classes dentro de classes, pelo que funciona como um namespace
// Tambem é possível implementar diversas classes no mesmo arquivo, mas somente uma deve ter a key public

// somente a classe com a key public é exportada como parte do pacote
// as demais classes ficam ocultas como utilitárias dentro do escopo

public class Main {
    public int x = 5; // public é o padrão. Variável de instância. Preecisa criar um objeto.
    public static int y = 5; // Variável de classe. Não precisa criar o objeto
    public static void main(String[] args) {
        Main myObj = new Main();
        System.out.println(myObj.x);
        System.out.println(Main.y);
    }
}