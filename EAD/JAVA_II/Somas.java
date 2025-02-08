public class Somas {
  public static void main(String[] args) {
    int n = 0;
    double somatorio = 0.0;
    double somaQuadrados = 0.0;
    int numeroTermos = 0;
    System.out.println("Informe %d o número: ");
    n = Integer.parseInt(System.console().readLine());
    int m = 1;
    while (m <= n) {
      somatorio += m;
      somaQuadrados += m * m;
      numeroTermos += 1;
      m += 1;
    }
    System.out.printf("Somatório é %f \n", somatorio);
    System.out.printf("Soma quadrados é %f \n", somaQuadrados);
    System.out.printf("Média é %f \n", somatorio / numeroTermos);
  }
}
