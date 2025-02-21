import java.util.Scanner;

public class Fibbo {
  public static void main(String[] args) {
    long n = 0L; 
    long f = 1L;
    long p = 0L;
    long temp = 0L;
    Scanner sc = new Scanner(System.in);
    long c = Long.parseLong(sc.nextLine());
    long start = System.nanoTime();
    do {
      n++;
      if (n == 1) {
        System.out.printf("N: %d - %d \n", n, f);
      } else {
        temp = f;
        f = f + p;
        p = temp;
        System.out.printf("N: %d - %d \n", n, f);
      }
    } while (n < c);
    long end = System.nanoTime();
    System.out.println("Tempo do while: " + (end - start) + " ns");
    sc.close();
  }
}
