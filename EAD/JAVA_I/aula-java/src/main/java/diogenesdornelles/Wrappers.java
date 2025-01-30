//  Diferença entre Tipos Primitivos e Wrappers
// Java possui tipos primitivos (int, double, char, etc.) e classes wrapper (Integer, Double, Character, etc.), que encapsulam os primitivos em objetos.

// int five = 5; Valor literal armazenado diretamente na memória
// Integer five = Integer.valueOf(5); Objeto armazenado no heap (com referência)

public class Wrappers {
    public static void main(String[] args) {
        Integer inteiro = Integer.valueOf(100);
        Double decimal = Double.valueOf(3.14);
        Boolean bool = Boolean.TRUE;

        System.out.println("Integer: " + inteiro);
        System.out.println("Double: " + decimal);
        System.out.println("Boolean: " + bool);
    }
}