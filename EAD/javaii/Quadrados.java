public class Quadrados {
  public static void main(String[] args) {
    int n = 0;
    while (n >= 0) {
      System.out.printf("Informe %d número (negativo encerra): ", n);
      n = Integer.parseInt(System.console().readLine());
      if (n >= 0) {
        System.out.printf("Quadrado é %d \n", n * n);
      }
    }
  }
}
