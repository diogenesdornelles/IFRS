import java.util.Scanner;

public class BinToDecimal {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String bin = sc.nextLine();
    System.out.printf("%s", Integer.parseInt(bin, 2));
    sc.close();
  }

}
