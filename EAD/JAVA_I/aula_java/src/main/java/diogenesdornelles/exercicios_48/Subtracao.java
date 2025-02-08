package diogenesdornelles.exercicios_48;

import java.util.Scanner;

class Subtracao {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("### Subtração ####");
    System.out.println("Entre com o primeiro número: ");
    Double N1 = scan.nextDouble();
    System.out.println("Entre com o segundo número: ");
    Double N2 = scan.nextDouble();
    Double resultado = N1 - N2;
    System.out.println("Resultado: " + resultado);
    scan.close();
  }
}