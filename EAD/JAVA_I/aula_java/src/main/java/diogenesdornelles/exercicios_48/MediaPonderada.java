package diogenesdornelles.exercicios_48;

import java.util.Scanner;

public class MediaPonderada {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int[] pesos = { 1, 2, 3 };
    double somaNotas = 0;
    int somaPesos = 0;
    for (int i = 0; i < pesos.length; i++) {
      System.out.println(String.format("Digite a %d notas do aluno", i + 1));
      double nota = scanner.nextDouble();
      somaNotas += nota * pesos[i];
      somaPesos += pesos[i];
    }
    double notaFinal = somaNotas / somaPesos;
    System.out.println("Média final: " + notaFinal);
    scanner.close();
  }
}
