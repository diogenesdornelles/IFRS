import java.util.Scanner;

public class ModDois4Vetores {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] A = new int[5];
        int[] B = new int[5];
        int count = 0;
        while (count < 5) {
            System.out.println("Informe int para array A: ");
            String inputa = sc.nextLine();
            while (!inputa.matches("\\d+")) {
                System.out.println("Informe int para array A: ");
                inputa = sc.nextLine();
            }
            System.out.println("Informe int para array B: ");
            String inputb = sc.nextLine();
            int numeroa = Integer.parseInt(inputa);
            A[count] = numeroa;
            while (!inputb.matches("\\d+")) {
                System.out.println("Informe int para array B: ");
                inputb = sc.nextLine();
            }
            int numerob = Integer.parseInt(inputb);
            B[count] = numerob;
            count++;
        }
        int sum = 0;
        for (int i = 0; i < A.length; i++) {
            sum += A[i] - B[B.length - i - 1];
        }
        System.out.printf("Valor acumulado: %d \n", sum);
        sc.close();
    }
}