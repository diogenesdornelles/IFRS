#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída
#include <string.h> // Inclui a biblioteca para manipulação de strings
#include <stdlib.h> // Inclui a biblioteca padrão para alocação de memória, conversões e outras funções

int main()
{
    // Declaração e inicialização de um array multidimensional
    int matriz1[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}};
    // Impressão da matriz
    printf("Matriz:\n");
    for (int i = 0; i < 3; ++i)
    {
        for (int j = 0; j < 3; ++j)
        {
            printf("%d ", matriz1[i][j]);
        }
        printf("\n");
    }
    int linhas, colunas;

    // Solicita ao usuário o número de linhas e colunas
    printf("Digite o número de linhas e colunas: ");
    scanf("%d %d", &linhas, &colunas);

    // Aloca memória para o array multidimensional
    int **matriz = (int **)malloc(linhas * sizeof(int *));
    if (matriz == NULL)
    {
        printf("Erro ao alocar memória.\n");
        return 1;
    }
    for (int i = 0; i < linhas; ++i)
    {
        matriz[i] = (int *)malloc(colunas * sizeof(int));
        if (matriz[i] == NULL)
        {
            printf("Erro ao alocar memória.\n");
            return 1;
        }

        return 0; // Retorna 0 para indicar que o programa foi executado com sucesso
    }