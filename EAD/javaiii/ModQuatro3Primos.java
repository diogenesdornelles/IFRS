public class ModQuatro3Primos {
    public static boolean ePrimo(int n) {
        if (n < 2) return false; // números menores que 2 não são primos
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            System.out.printf("%d %s\n", i, ePrimo(i) ? "é primo" : "não é primo");
        }
    }
}