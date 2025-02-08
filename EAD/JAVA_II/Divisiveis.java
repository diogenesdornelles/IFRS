import java.util.ArrayList;

public class Divisiveis {

  public static void main(String[] args) {
    ArrayList<Integer> numeros = new ArrayList<>();
    for (int i = 0; i < 4; i++) {
      System.out.printf("Informe o %d numero:", i + 1);
      numeros.add(Integer.parseInt(System.console().readLine()));
    }
    for (int num : numeros) {
      if (num % 6 == 0) {
        System.out.printf("%d é divisível por 2 e 3\n", num);
      } else if (num % 2 == 0) {
        System.out.printf("%d é divisível por 2\n", num);
      } else if (num % 3 == 0) {
        System.out.printf("%d é divisível por 3\n", num);
      } else {
        System.out.printf("%d não é divisível por 2 ou 3\n", num);
      }
    }
  }

}
