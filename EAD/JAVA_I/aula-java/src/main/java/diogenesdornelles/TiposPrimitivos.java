// são 8 tipos diferentes que armazenam valores direto em memória
// são imutáveis, ou seja, uma vez criado, seu valor não pode ser alterado
// cada tipo tem um tamanho fixo em memória e um valor padrão (default) específico

public class TiposPrimitivos {
    public static void main(String[] args) {
        byte b = 100; // -128 a 127, 8 bits, default 0
        short s = 20000; // -32.768 a 32.767, 16 bits, default 0
        int i = 1_000_000; // -2³¹ a 2³¹-1, 32 bits, default 0
        long l = 9_000_000_000L; // -2⁶³ a 2⁶³-1,64 bits, default 0L
        float f = 3.14f; // ~7 casas decimais, 32 bits, default 0.0f
        double d = 2.7182818284; // ~15 casas decimais, 64 bits, default 0.0d
        char c = 'J'; // 0 a 65.535 (Unicode), 16 bits, default '\u0000'
        boolean bool = true; // true ou false, 1 bit, default false 1

        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);
    }
}
