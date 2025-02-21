public class SomaDez {
  public static void main(String[] args) {
    int n = 1;
    double soma = 0.0;
    while (n < 11) {
      System.out.printf("Informe %d número: ", n);
      soma += Double.parseDouble(System.console().readLine());
      n += 1;
    }
    System.out.printf("Soma é %f \n", soma);
  }
}
