#include <stdbool.h> // Inclui a biblioteca para usar o tipo de dado booleano em C
#include <stdio.h>   // Inclui a biblioteca padrão de entrada e saída
#include <string.h>  // Inclui a biblioteca para manipulação de strings

// Definição da struct para armazenar informações sobre uma pessoa
struct Pessoa
{
    char nome[50]; // Array de caracteres para armazenar o nome da pessoa (com espaço para até 49 caracteres mais o caractere nulo '\0')
    int idade;     // Variável para armazenar a idade da pessoa
    float altura;  // Variável para armazenar a altura da pessoa
    bool vivo;
};

int main()
{

    // Atribuição de valores aos membros da struct
    struct Pessoa pessoa1;
    strcpy(pessoa1.nome, "João"); // Copia a string "João" para o membro 'nome' da struct 'pessoa1'
    pessoa1.idade = 30;           // Atribui o valor 30 ao membro 'idade' da struct 'pessoa1'
    pessoa1.altura = 1.75;        // Atribui o valor 1.75 ao membro 'altura' da struct 'pessoa1'
    pessoa1.vivo = true;

    // Impressão dos valores da struct
    printf("Nome: %s\n", pessoa1.nome);       // Imprime o nome da pessoa1
    printf("Idade: %d\n", pessoa1.idade);     // Imprime a idade da pessoa1
    printf("Altura: %.2f\n", pessoa1.altura); // Imprime a altura da pessoa1

    return 0; // Retorna 0 para indicar que o programa foi executado com sucesso
}