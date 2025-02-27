public class ModTres3Diagonal {
    public static void main(String[] args) {
        double[][] matriz = new double[5][5];
        double soma = 0.0;
        
        // Preenche a matriz e acumula
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                matriz[i][j] = Math.random() * 10; 
                if (i + j == 4) { 
                    soma += matriz[i][j];
                }
            }
        }
        
        // Exibe a soma da diagonal secundária
        System.out.printf("Soma da diagonal secundária: %.2f\n", soma);
        
        // Exibindo a matriz resultante
        System.out.println("\nMatriz resultante:");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.printf("%.2f ", matriz[i][j]);
            }
            System.out.println();
        }
    }
}
