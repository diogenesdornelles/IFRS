import java.util.Scanner;

public class ModTres1Matriz {
    public static void main(String[] args) {
        final int linhas = 6;
        final int colunas = 4;
        int[] maiores = new int[linhas];
        int[][] matriz = new int[linhas][colunas];
        Scanner sc = new Scanner(System.in);

        // Preenchendo matriz
        for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < colunas; j++) {
                System.out.printf("Informe elemento linha %d, coluna %d: ", i, j);
                // Validação
                while (!sc.hasNextInt()) {
                    System.out.printf("Valor inválido! Informe elemento linha %d, coluna %d: ", i, j);
                    sc.next(); // descartar uma entrada inválida
                }
                matriz[i][j] = sc.nextInt();
            }
        }
        
        // Achando o maior para cada linha
        for (int i = 0; i < linhas; i++) {
            int maior = matriz[i][0]; // ao primeiro elemento é o maior
            for (int j = 1; j < colunas; j++) {
                if (matriz[i][j] > maior) {
                    maior = matriz[i][j];
                }
            }
            maiores[i] = maior; // armazena o maior elemento da linha i
        }
        
        // Fazendo a multiplicação
        for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < colunas; j++) {
                matriz[i][j] *= maiores[i];
            }
        }
        
        // Exibindo a matriz resultante
        System.out.println("\nMatriz resultante:");
        for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < colunas; j++) {
                System.out.printf("%d ", matriz[i][j]);
            }
            System.out.println();
        }
        
        sc.close();
    }
}
