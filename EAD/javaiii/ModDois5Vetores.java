import java.util.Scanner;

public class ModDois5Vetores {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] A = new int[20];
        double[] B = new double[20];
        int count = 0;
        while (count < 20) {
            System.out.printf("Informe int n. %d para array A: ", count +1);
            String inputa = sc.nextLine();
            while (!inputa.matches("\\d+")) {
                System.out.println("Informe int para array A: ");
                inputa = sc.nextLine();
            }
            int numeroa = Integer.parseInt(inputa);
            A[count] = numeroa;
            count++;
        }
        int maior = A[0];
        for (int i = 1; i < A.length; i++) {
            if (A[i] > maior) {
                maior = A[i];
            }
        }
        for (int i = 0; i < B.length; i++) {
            B[i] = (double) A[i] / maior;
            System.out.printf("Valor divisao: %.2f \n", B[i]);
        }
        sc.close();
    }
}