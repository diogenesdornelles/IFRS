import java.util.Scanner;

public class  Fahrenheit {
  public static void main(String[] args) {
    System.out.println("Entre com a temperatura celsius: ");
    Scanner sc = new Scanner(System.in);
    double celsius = sc.nextDouble();
    double fahrenheit = (celsius * 9/5) + 32;
    System.out.println("Temperatura fahrenheit: " + fahrenheit);
    sc.close();
  }
}
