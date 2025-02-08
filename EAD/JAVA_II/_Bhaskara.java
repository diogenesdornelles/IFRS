public class _Bhaskara {

  double a = 0, b = 0, c = 0;

  public double getDelta() {
    return b * b - 4 * a * c;
  }

  public String getRoots() {
    double delta = getDelta();
    double x1, x2;
    if (delta < 0) {
      return "Não possui raízes reais";
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
    }
    return "x1 = " + x1 + ", x2 = " + x2;
  }

  public static void main(String[] args) {
    _Bhaskara bhas = new _Bhaskara();
    System.out.println("Informe o valor de 'a': ");
    bhas.a = Double.parseDouble(System.console().readLine());
    System.out.println("Informe o valor de 'b': ");
    bhas.b = Double.parseDouble(System.console().readLine());
    System.out.println("Informe o valor de 'c': ");
    bhas.c = Double.parseDouble(System.console().readLine());
    System.out.println(bhas.getRoots());
  }
}
