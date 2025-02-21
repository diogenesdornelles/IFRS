public class Faixa {
  public static void main(String[] args) {
    System.out.println("Entre com o número: ");
    int n1 = Integer.parseInt(System.console().readLine());
    if (n1 > 9 || n1 < 1) {
      System.out.println("O valor está fora da faixa permitida");
    } else {
      System.out.println("O valor está na faixa permitida");
    }
  }
}
