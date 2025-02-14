import java.util.Scanner;

public class ModuloUm2AcaoBolsa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char acao = '0';
        double precoCompra, precoVenda;
        int quantidadeSuperiorMil = 0, quantidadeInferiorDuzentos = 0;
        while (true) {
            System.out.println("Informe o tipo de ação: ");
            acao = sc.nextLine().charAt(0);
            System.out.println("Informe o preço de compra: ");
            precoCompra = Double.parseDouble(sc.nextLine());
            System.out.println("Informe o preço de venda: ");
            precoVenda = Double.parseDouble(sc.nextLine());
            if (Character.toUpperCase(acao) == 'F') {
                break; 
            } else {
                if (precoVenda - precoCompra > 1000.0) {
                    quantidadeSuperiorMil++;
                }
                if (precoVenda - precoCompra < 200.0) {
                    quantidadeInferiorDuzentos++;
                }
            }



        }


        System.out.println("Quantidade de ações com lucro superior a 1000: " + quantidadeSuperiorMil);
        System.out.println("Quantidade de ações com lucro inferior a 200: " + quantidadeInferiorDuzentos);
        sc.close();
    }
}
