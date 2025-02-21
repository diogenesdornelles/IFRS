class Maior {
  public static void main(String[] args) {
    System.out.println("Entre com o primeiro número: ");
    int n1 = Integer.parseInt(System.console().readLine());
    System.out.println("Entre com o segundo número: ");
    int n2 = Integer.parseInt(System.console().readLine());
    System.out.println("Entre com o terceiro número: ");
    int n3 = Integer.parseInt(System.console().readLine());
    int max = Math.max(n1, n2);
    max = Math.max(max, n3);
    System.out.printf("%d é o maior número\n", max);
  }
}