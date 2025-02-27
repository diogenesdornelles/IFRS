public class ModTres2Diagonal {
    public static void main(String[] args) {
        long[][] matriz = new long[10][10];
        long soma = 0L;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                matriz[i][j] = Math.round(Math.random() * 10) ;
                if (i == j) {
                    soma += matriz[i][j];
                }
            }
        }
        System.out.printf("Media: %f\n", (double) soma / 10);
        // Exibindo a matriz resultante
        System.out.println("\nMatriz resultante:");
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.printf("%d ", matriz[i][j]);
            }
            System.out.println();
        }
    }
    
}
