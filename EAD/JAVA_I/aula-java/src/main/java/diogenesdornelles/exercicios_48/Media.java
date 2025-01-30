import java.util.Scanner;
import java.util.ArrayList;

class Media {
    public static void main(String[] args) { 
        Scanner scan = new Scanner(System.in);
        ArrayList<Double> numeros = new ArrayList<>();
        int notas = 3;
        System.out.println("### Média ####");        
        for (int i = 1; i < notas + 1; i++) {
          String mensagem = String.format("Entre com o %d número: ", i);
          System.out.println(mensagem);
          double numero = scan.nextDouble();
          numeros.add(numero);
        }
        double resultado = 0.0;
        for (double numero : numeros) {
          resultado += numero;
        }
        System.out.println("Média final: " + resultado/notas);
        scan.close();
    }
}