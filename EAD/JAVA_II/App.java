import java.util.Scanner;
import java.util.function.Function;

public class App {
    static Function<String, Double> parseDouble = Double::parseDouble;
    static Function<Double, Long> round = Math::round;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Entre com o número a ser arredondado: ");
        double numero = App.parseDouble.apply(sc.nextLine());
        System.out.println("Entre com o número de casas: ");
        int casas = Integer.parseInt(sc.nextLine());

        numero = numero * Math.pow(10, casas + 1);
        numero = App.round.apply(numero);
        numero = numero % 10 >= 5 ? numero + 1.0 : numero;
        numero = App.round.apply(numero / 10);
        numero = numero / Math.pow(10, casas);
        System.out.printf("Número arredondado: %." + casas + "f\n", numero);
        sc.close();
    }
}
