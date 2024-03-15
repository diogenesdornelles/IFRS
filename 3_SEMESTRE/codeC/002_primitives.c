#include <stdbool.h> // Inclui a biblioteca para usar o tipo de dado booleano em C
#include <stdio.h>   // Inclui a biblioteca padrão de entrada e saída
#include <string.h>  // Inclui a biblioteca para manipulação de strings
#include <stdlib.h>  // Inclui a biblioteca padrão para alocação de memória, conversões e outras funções



int main()
{
    char sex = 'M';                                            // Inicializa uma variável de caractere com o valor 'M'
    char name[] = "Meu nome";                                  // Inicializa uma string de caracteres com o valor "Meu nome" (o tamanho do array é determinado automaticamente pelo compilador)
    char *surname = "Meu sobrenome";                           // Inicializa um ponteiro para uma string constante "Meu sobrenome"
    char surname_2[] = "Meu sobrenome";                        // Inicializa uma string de caracteres com o valor "Meu sobrenome" (o tamanho do array é determinado automaticamente pelo compilador)
    char minhaString[6] = {'H', 'e', 'l', 'l', 'o', '\0'};     // Inicializa uma string de caracteres com o valor "Hello" explicitamente, com o último caractere '\0' indicando o fim da string
    int age = 38;                                              // Inicializa uma variável inteira com o valor 38
    long int integer = 34530945;                               // Inicializa uma variável inteira longa com o valor 34530945
    signed long int big_integer = -298834028;                  // Inicializa uma variável inteira longa assinada com o valor -298834028
    unsigned long long int biggest_integer = 2948045345830985; // Inicializa uma variável inteira longa sem sinal com o valor 2948045345830985
    bool is_active = true;                                     // Inicializa uma variável booleana com o valor verdadeiro (true)
    float height = 1.70;                                       // Inicializa uma variável de ponto flutuante com o valor 1.70
    double pi = 3.132455667788765544333;                       // Inicializa uma variável de dupla precisão com o valor 3.132455667788765544333
    return 0; // Retorna 0 para indicar que o programa foi executado com sucesso
}