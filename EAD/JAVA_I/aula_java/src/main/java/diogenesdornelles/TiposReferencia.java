package diogenesdornelles;

// Tipos por Referência
// Os tipos por referência armazenam endereços de memória em vez de valores diretos. Exemplos incluem:

// Classes (Exemplo: String, Scanner)
// Arrays (Exemplo: int[], String[])
// Objetos (Exemplo: Pessoa, Carro)
// Interfaces (Exemplo: Runnable)
// Enums (Exemplo: enum DiaSemana)
// Coleções (Exemplo: ArrayList, HashMap)


// Array
// Tamanho fixo: Uma vez criado, o tamanho do array não pode ser alterado.
// Pode armazenar tipos primitivos (int, double, etc.) ou objetos.
// Acesso mais rápido do que ArrayList, pois não há sobrecarga adicional.
// Sem métodos embutidos para manipulação (como adicionar ou remover elementos).


// // ArrayList
// Tamanho dinâmico: Pode crescer ou diminuir automaticamente.
// Apenas para objetos (Integer, String, Double, etc.), não suporta tipos primitivos diretamente.
// Mais funcionalidades: Possui métodos embutidos como add(), remove(), contains(), size(), etc.
// Um pouco mais lento que arrays devido à sobrecarga de gerenciamento dinâmico.

import java.util.ArrayList;
import java.util.HashMap; // import the HashMap class
import java.util.LinkedList; // Import the LinkedList class

public class TiposReferencia {
    public static void main(String[] args) {
        String texto = "Olá, Java!";
        int[] numeros = {1, 2, 3, 4, 5};
        ArrayList<String> lista = new ArrayList<>();
        HashMap<String, String> capitalCities = new HashMap<String, String>();
        LinkedList<String> cars = new LinkedList<String>();

        lista.add("Java");
        lista.add("Python");
        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        cars.add("Volvo");

        System.out.println("String: " + texto);
        System.out.println("Array: " + numeros[2]); // Terceiro elemento
        System.out.println("Lista: " + lista);
        System.out.println("HashMaop: " + capitalCities.get("England"));
        System.out.println(cars);
    }
}