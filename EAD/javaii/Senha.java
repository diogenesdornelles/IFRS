import java.util.Scanner;

public class Senha {
  public static void main(String[] args) {
    String senha = "";
    int count = 1;
    Scanner sc = new Scanner(System.in);
    do {
      System.out.printf("Informe a senha (%dx): ", count);
      senha = sc.nextLine();
      count++;
    } while (!senha.equals("1234"));
    System.out.println("Senha correta...");
    sc.close();
  }
}
