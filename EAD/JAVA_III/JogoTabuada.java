import java.util.Scanner;

public class JogoTabuada {
    public static void main(String[] args) {
        System.out.println("MEU JOGO DE TABUADA!!!");
        Scanner sc = new Scanner(System.in);
        int n1 = 0, n2 = 0, res_real = 1, res_jogador = 1, acertos = 0, erros = 0, total = 0;
        boolean continuar = true; 
        while (continuar) {
            System.out.print("\033[H\033[2J");
            System.out.flush();
            n1 = (int) (Math.random() * 10) + 1;
            n2 = (int) (Math.random() * 10) + 1;
            System.out.println(n1 + " x " + n2 + " = ???");
            res_real = n1 * n2;
            total++;
            try {
                for (int i = 1; i <= 3; i++) {
                    Thread.sleep(1000);
                    System.out.printf(i + "s... ");
                }
                System.out.println("\nDigite sua resposta:");
                res_jogador = Integer.parseInt(sc.nextLine());
                continuar = res_jogador >= 1 && res_jogador <= 100;
                if (continuar) {
                    if (res_real == res_jogador) {
                        System.out.println("Você acertou!!! \n");
                        acertos++;
                    } else {
                        System.out.println("Você errou!!! \n");
                        erros++;
                    }
                    Thread.sleep(1000);
                }

            } catch (InterruptedException ex) {
                Thread.currentThread().interrupt();
            } catch (NumberFormatException ex) {
                try {
                    System.out.println("Informe um número correto \n");
                    Thread.sleep(1000);
                } catch (InterruptedException ex2) {
                Thread.currentThread().interrupt();
            } 
            }
        }
        sc.close();
        System.out.print("\033[H\033[2J");
        System.out.flush();
        System.out.printf("Você errou %d perguntas \n", erros);
        System.out.printf("Você acertou %d perguntas \n", acertos);
        System.out.printf("Você acertou %.2f%%\n", 100.0 * ((double) acertos / total));
    }
}