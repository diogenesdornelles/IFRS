#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída
#include <stdlib.h> // Inclui a biblioteca padrão para alocação de memória, conversões e outras funções

int main()
{
    // Array de inteiros
    int arr_int[] = {1, 2, 3, 4, 5}; // Inicializa um array de inteiros com os valores 1, 2, 3, 4 e 5

    // Array de ponto flutuante
    float arr_float[] = {1.5, 2.7, 3.9, 4.2, 5.0}; // Inicializa um array de ponto flutuante

    // Array de caracteres
    char arr_char[] = {'a', 'b', 'c', 'd', 'e'}; // Inicializa um array de caracteres

    // Array de booleanos (em C, geralmente usa-se inteiros para representar booleanos)
    int arr_bool[] = {1, 0, 1, 1, 0}; // Inicializa um array de booleanos (1 para verdadeiro, 0 para falso)

    // Array de strings (array de arrays de caracteres)
    char *arr_str[] = {"apple", "banana", "orange"}; // Inicializa um array de strings

    // Alocação dinâmica de memória para um array de inteiros
    int *arr_dynamic = malloc(5 * sizeof(int)); // Aloca memória dinamicamente para um array de 5 inteiros usando a função malloc

    // Verifica se a alocação de memória foi bem-sucedida
    if (arr_dynamic == NULL)
    {
        printf("Erro ao alocar memória.\n");
        return 1; // Retorna 1 para indicar um erro
    }

    // Atribui valores aos elementos do array alocado dinamicamente
    for (int i = 0; i < 5; ++i)
    {
        arr_dynamic[i] = i + 1; // Atribui valores sequenciais ao array dinâmico
    }

    // Impressão dos valores dos arrays
    printf("Array de inteiros: ");
    for (int i = 0; i < 5; ++i)
    {
        printf("%d ", arr_int[i]);
    }
    printf("\n");

    printf("Array de ponto flutuante: ");
    for (int i = 0; i < 5; ++i)
    {
        printf("%.2f ", arr_float[i]);
    }
    printf("\n");

    printf("Array de caracteres: ");
    for (int i = 0; i < 5; ++i)
    {
        printf("%c ", arr_char[i]);
    }
    printf("\n");

    printf("Array de booleanos: ");
    for (int i = 0; i < 5; ++i)
    {
        printf("%d ", arr_bool[i]);
    }
    printf("\n");

    printf("Array de strings: ");
    for (int i = 0; i < 3; ++i)
    {
        printf("%s ", arr_str[i]);
    }
    printf("\n");

    printf("Array alocado dinamicamente: ");
    for (int i = 0; i < 5; ++i)
    {
        printf("%d ", arr_dynamic[i]);
    }
    printf("\n");

    // Libera a memória alocada para o array dinâmico
    free(arr_dynamic); // Libera a memória alocada para o array 'arr_dynamic'

    return 0; // Retorna 0 para indicar que o programa foi executado com sucesso
}