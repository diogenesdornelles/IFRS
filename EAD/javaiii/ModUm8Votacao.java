import java.util.Scanner;

public class ModUm8Votacao {

    public void showOpcoes() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
        System.out.println("Escolha uma opção:");
        System.out.println("0. Sair");
        System.out.println("1. Candidato A");
        System.out.println("2. Candidato B");
        System.out.println("3. Candidato C");
        System.out.println("4. Candidato D");
        System.out.println("5. Nulo");
        System.out.println("6. Branco");
    }
    public static void main(String[] args) {
        ModUm8Votacao mod = new ModUm8Votacao();
        int cantidatoA = 0, cantidatoB = 0, cantidatoC = 0, cantidatoD = 0, nulos = 0, brancos = 0;
        Scanner sc = new Scanner(System.in);
        while (true) {
            mod.showOpcoes();
            String input = sc.nextLine();
            while (!input.matches("\\d+")) {
                mod.showOpcoes();
                input = sc.nextLine();
            }
            int numero  = Integer.parseInt(input);
            if (numero == 0) {
                break;
            }
            switch (numero) {
                case 1: cantidatoA++; break;
                case 2: cantidatoB++; break;
                case 3: cantidatoC++; break;
                case 4: cantidatoD++; break;
                case 5: nulos++; break;
                case 6: brancos++; break;            
                default: System.out.println("Opção inexistente\n");
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
        } 
        }
        System.out.println("Votação".toUpperCase() + "\n");
        System.out.printf("Candidato A: %d\n", cantidatoA);
        System.out.printf("Candidato B: %d\n", cantidatoB);
        System.out.printf("Candidato C: %d\n", cantidatoC);
        System.out.printf("Candidato D: %d\n", cantidatoD);
        System.out.printf("Nulos: %d\n", nulos);
        System.out.printf("Brancos: %d\n", brancos);
        sc.close();
    }
}
