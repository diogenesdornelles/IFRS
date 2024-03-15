#include <stdio.h>   // Inclui a biblioteca padrão de entrada e saída

// Definição de uma união
union Dados
{
    int inteiro;
    float flutuante;
    char caractere;
};

int main()
{
    // Declaração e inicialização de uma união
    union Dados dado;

    // Atribuição de valores aos membros da união
    dado.inteiro = 10;
    printf("Valor inteiro: %d\n", dado.inteiro);

    dado.flutuante = 3.14;
    printf("Valor flutuante: %.2f\n", dado.flutuante);

    dado.caractere = 'A';
    printf("Valor caractere: %c\n", dado.caractere);

    return 0; // Retorna 0 para indicar que o programa foi executado com sucesso
}