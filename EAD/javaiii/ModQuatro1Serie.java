
public class ModQuatro1Serie {

    public static long fatorial(long n) {
        long fat = 1;
        while (n > 0) {
            fat *= n;
            n--;
        }
        return fat;
    }

    public static void main(String[] main) {
        double s = 0;
        int fator = 100;
        for (int i = 0; i <= 20; i++) {
            s += (double) (fator - i) / fatorial(i);
        }
        System.out.printf("Resultado: %f\n", s);
    }
}
