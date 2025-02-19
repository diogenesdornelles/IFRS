public class ModDois1Preencha {
    
    public static void main(String[] args) {
        final int tamanho = 10;
    
        String[] produtos = {"pera", "banana", "pessego", "melancia", "morango", "laranja", "goiaba", "bergamota", "ameixa", "melao"};
        int[] codigos = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        double[] precos = {240.0, 5600.0, 600.0, 1700.0, 90.0, 10000.0, 740.0, 1100.0, 3500.0, 400.0};
    
        for (int i = 0; i < tamanho; i++) {
            boolean mudou = false;
            int codigo = codigos[i];
            double preco = precos[i];
            if (codigo % 2 == 0 && preco > 1000) {
                mudou = true;
                precos[i] *= 1.2;
            } else if (codigo % 2 == 0) {
                precos[i] *= 1.15;
                mudou = true;
            } else  if (preco > 1000) {
                precos[i] *= 1.1;
                mudou = true;
            }
            if (mudou) System.out.printf("Cod.: %d | Produto: %s | Preço: %.2f\n", codigos[i], produtos[i], precos[i]);

        }
    }



}
