package diogenesdornelles;

import java.io.Console;

public class Exemplo01 { 

  public static void main(String[] args) {
      Console console = System.console();
      double N1, N2, N3, N4, RES;     

      N1 = Double.parseDouble(console.readLine());

      N2 = Double.parseDouble(console.readLine());

      N3 = Double.parseDouble(console.readLine());

      N4 = Double.parseDouble(console.readLine());

      RES = (N1 + N2 + N3 + N4) / 4;       

      System.out.println(RES);

  }

}