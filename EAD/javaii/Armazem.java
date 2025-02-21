import java.util.ArrayList;
import java.util.Scanner;
import java.util.Iterator;

class Mercadoria {
  String nome;
  double preco;
  int quantidade;

  public Mercadoria(String nome, double preco, int quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

public class Armazem {
  ArrayList<Mercadoria> produtosEmEstoque;
  ArrayList<Mercadoria> produtosVendidos;

  public Armazem() {
    this.produtosEmEstoque = new ArrayList<>();
    this.produtosVendidos = new ArrayList<>();
  }

  public static void menu() {
    System.out.println("######################");
    System.out.println("Selecione uma opção:");
    System.out.println("1. Comprar");
    System.out.println("2. Vender");
    System.out.println("3. Listar Produtos em Estoque");
    System.out.println("4. Listar Produtos Vendidos");
    System.out.println("5. Mostrar faturamento");
    System.out.println("6. Sair");
    System.out.println("######################");
  }

  public void showFaturamento() {
    double total = 0.0;
    for (Mercadoria mercadoria : this.produtosVendidos) {
      total += mercadoria.preco * mercadoria.quantidade;
    }
    System.out.printf("Total faturado: %.2f\n", total);
  }

  public void imprimirProdutos(ArrayList<Mercadoria> produtos) {
    for (Mercadoria mercadoria : produtos) {
      System.out.println("__________________________");
      System.out.println("Nome: " + mercadoria.nome + " | Preço: " + mercadoria.preco
          + " | Quantidade: " + mercadoria.quantidade
          + " | Total: " + (mercadoria.preco * mercadoria.quantidade));
      System.out.println("__________________________");
    }
  }

  public void showVendas() {
    System.out.println("Produtos vendidos:");
    this.imprimirProdutos(produtosVendidos);
  }

  public void showEstoque() {
    System.out.println("Produtos em estoque:");
    this.imprimirProdutos(produtosEmEstoque);
  }

  public boolean compra(String produto, int quantidade, double preco) {
    // Verifica se o produto já existe no estoque
    for (Mercadoria mercadoria : this.produtosEmEstoque) {
      if (mercadoria.nome.equals(produto)) {
        // Se existir, atualiza a quantidade
        mercadoria.quantidade += quantidade;
        return true;
      }
    }
    // Se não existir, adiciona um novo produto ao estoque
    Mercadoria novoProduto = new Mercadoria(produto, preco, quantidade);
    this.produtosEmEstoque.add(novoProduto);
    return true;
  }

  public boolean venda(String produto, int quantidade) {
    // Utiliza Iterator para permitir a remoção segura do produto, se necessário
    Iterator<Mercadoria> iterator = produtosEmEstoque.iterator();
    while (iterator.hasNext()) {
      Mercadoria mercadoria = iterator.next();
      if (mercadoria.nome.equals(produto) && mercadoria.quantidade >= quantidade) {
        // Realiza a venda reduzindo a quantidade no estoque
        mercadoria.quantidade -= quantidade;
        // Registra a venda
        Mercadoria vendido = new Mercadoria(mercadoria.nome, mercadoria.preco, quantidade);
        produtosVendidos.add(vendido);
        // Se a quantidade no estoque chegar a zero, remove o produto
        if (mercadoria.quantidade == 0) {
          iterator.remove();
        }
        return true;
      }
    }
    return false;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Armazem armazem = new Armazem();
    boolean continuar = true;

    while (continuar) {
      menu();
      int op;
      try {
        op = Integer.parseInt(scanner.nextLine());
      } catch (NumberFormatException e) {
        System.out.println("Opção inválida. Tente novamente.");
        continue;
      }

      String produto;
      double preco;
      int quantidade;

      switch (op) {
        case 1: {
          System.out.println("Digite o nome do produto: ");
          produto = scanner.nextLine();

          System.out.println("Digite o preço do produto: ");
          try {
            preco = Double.parseDouble(scanner.nextLine());
          } catch (NumberFormatException e) {
            System.out.println("Preço inválido. Operação cancelada.");
            break;
          }

          System.out.println("Digite a quantidade do produto: ");
          try {
            quantidade = Integer.parseInt(scanner.nextLine());
          } catch (NumberFormatException e) {
            System.out.println("Quantidade inválida. Operação cancelada.");
            break;
          }

          if (armazem.compra(produto, quantidade, preco)) {
            System.out.printf("Produto cadastrado com sucesso: %s\n", produto);
          } else {
            System.out.println("Um problema ocorreu.");
          }
          break;
        }
        case 2: {
          System.out.println("Digite o nome do produto: ");
          produto = scanner.nextLine();

          System.out.println("Digite a quantidade do produto: ");
          try {
            quantidade = Integer.parseInt(scanner.nextLine());
          } catch (NumberFormatException e) {
            System.out.println("Quantidade inválida. Operação cancelada.");
            break;
          }

          if (armazem.venda(produto, quantidade)) {
            System.out.printf("Produto vendido com sucesso: %s\n", produto);
          } else {
            System.out.println("Um problema ocorreu ou estoque insuficiente.");
          }
          break;
        }
        case 3: {
          armazem.showEstoque();
          break;
        }
        case 4: {
          armazem.showVendas();
          break;
        }
        case 5: {
          armazem.showFaturamento();
          break;
        }
        case 6: {
          continuar = false;
          break;
        }
        default: {
          System.out.println("Opção inválida. Tente novamente.");
          break;
        }
      }
    }
    scanner.close();
  }
}
