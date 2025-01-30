public class Generico<T> {
    private T objeto;

    public void set(T objeto) {
        this.objeto = objeto;
    }

    public T get() {
        return objeto;
    }

    public static void main(String[] args) {
        Generico<String> caixaTexto = new Generico<>();
        caixaTexto.set("Java Genérico");
        
        Generico<Integer> caixaNumero = new Generico<>();
        caixaNumero.set(42);

        System.out.println("Caixa Texto: " + caixaTexto.get());
        System.out.println("Caixa Número: " + caixaNumero.get());
    }
}