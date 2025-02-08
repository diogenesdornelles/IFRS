public class SimulaDado {

  public static void main(String[] args) {

      int cont, dado;

      for( cont = 1; cont <= 5; cont++ ) {

            dado = (int)(1 + Math.random() * 6);

            System.out.println(dado);

      }

  }

}