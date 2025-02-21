import java.math.BigInteger;
import java.util.Scanner;

public class FibboLong {
  public static void main(String[] args) {
    BigInteger f = BigInteger.ONE; 
    BigInteger p = BigInteger.ZERO;
    BigInteger temp;
    
    Scanner sc = new Scanner(System.in);
    long c = Long.parseLong(sc.nextLine());
    sc.close();

    for (long n = 1; n <= c; n++) {
      System.out.printf("N: %d - %s \n", n, f);
      temp = f;
      f = f.add(p);
      p = temp;
    }
  }
}