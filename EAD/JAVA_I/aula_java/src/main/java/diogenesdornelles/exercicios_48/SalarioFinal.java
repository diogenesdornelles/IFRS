package diogenesdornelles.exercicios_48;
import java.util.Scanner;

public class SalarioFinal {
  
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Informe salário base: ");
    double salarioBase = sc.nextDouble();
    double salarioFinal = salarioBase * 1.05 * 0.93;
    System.out.println("Salário final: " + salarioFinal);
    sc.close();
  }
}
