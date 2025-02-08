import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class Menu {
  Scanner sc = new Scanner(System.in);

  protected void show() {
    System.out.println("###################");
    System.out.println("Menu de opções: ");
    System.out.println("1. Somar dois números.");
    System.out.println("2. Número ao quadrado.");
    System.out.println("3. Sair.");
    System.out.println("###################");
  }

  protected void clearScreen() {
    System.out.print("\033[H\033[2J");
    System.out.flush();
  }

  protected void wait(int ms)
  {
      try
      {
          Thread.sleep(ms);
      }
      catch(InterruptedException ex)
      {
          Thread.currentThread().interrupt();
      }
  }

  protected int soma() {
    int n1 = 0, n2 = 0;
    System.out.println("Informe o primeiro número: ");
    n1 = Integer.parseInt(sc.nextLine());
    System.out.println("Informe o segundo número: ");
    n2 = Integer.parseInt(sc.nextLine());
    return n1 + n2;
  }

  protected int quadrado() {
    int n1 = 0;
    System.out.println("Informe o número: ");
    n1 = Integer.parseInt(sc.nextLine());
    return n1 * n1;
  }

  public static void main(String[] args) {
    int choice = 0, res = 0;
    Menu menu = new Menu();
    while (choice != 3) {
      menu.wait(1000);
      menu.clearScreen();
      menu.show();
      choice = Integer.parseInt(menu.sc.nextLine());
      switch (choice) {
        case 1: {
          res = menu.soma();
          System.out.printf("Resultado: %d \n", res);
          break;
        }
        case 2: {
          res = menu.quadrado();
          System.out.printf("Resultado: %d \n", res);
          break;
        }
        default: {
          System.out.println("Saindo ");
        }
      }
    }
  }

}
