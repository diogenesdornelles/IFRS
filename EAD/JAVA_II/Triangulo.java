class TrianguloData {
  double a = 0, b = 0, c = 0;

  public boolean isTriangulo() {
    return (a + b > c) && (a + c > b) && (b + c > a) ? true : false;
  }
}

public class Triangulo {
  public static void main(String[] args) {
    TrianguloData tri = new TrianguloData();
    System.out.println("Informe o valor de 'a': ");
    tri.a = Double.parseDouble(System.console().readLine());
    System.out.println("Informe o valor de 'b': ");
    tri.b = Double.parseDouble(System.console().readLine());
    System.out.println("Informe o valor de 'c': ");
    tri.c = Double.parseDouble(System.console().readLine());
    System.out.println(tri.isTriangulo() ? "É um Triângulo" : "Não é um Triângulo");
  }
}
