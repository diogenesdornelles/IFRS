#include <stdio.h>   // Inclui a biblioteca padrão de entrada e saída

// Definição de uma enumeração
enum DiasDaSemana
{
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO,
    DOMINGO
};

int main()
{

    // Declaração de uma variável do tipo enum
    enum DiasDaSemana dia = TERCA;

    // Uso do enum
    if (dia == SABADO || dia == DOMINGO)
    {
        printf("É fim de semana!\n");
    }
    else
    {
        printf("Não é fim de semana!\n");
    }

    return 0; // Retorna 0 para indicar que o programa foi executado com sucesso
}