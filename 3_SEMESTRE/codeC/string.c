#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int arr(int *p)
{
    printf("Endereço: %p\n", p);
}

void string_iterate(char *str)
{
    for (int i = 0; str[i] != '\0'; i++)
    {
        printf("%c\n", str[i]);
    }
}

void string_iterate2(char *str)
{
    const char *p = str; // Usamos um ponteiro auxiliar para não modificar 'ptr'
    printf("Iterando a string: ");
    while (*p != '\0')
    {
        printf("%c", *p);
        p++; // Avança para o próximo caractere
    }
    printf("\n");
}

void string_length(char *str)
{
    int i = 0;
    while (str[i] != '\0')
    {
        i++;
    }
    printf("Tamanho da string: %d\n", i);
}

int main()
{
    // um ponteiro `ptr` do tipo char * e o inicializamos com o endereço onde a string literal "ola mundo" está armazenada (ready-only).
    const char *ptr = "ola mundo";
    // Através de %d, esperamos um inteiro. O * (desreferenciação) acessa o valor armazenado no endereço apontado por ola.
    // Como ola aponta para o início da string "ola mundo", *ola é o primeiro caractere, que é 'o'.
    // Logo, `o` é convertido para ascii 111, seu correspondente.
    printf("Conteúdo numérico (int) da primeira posição via ponteiro: %d\n", *ptr);
    // Acessamos o primeiro caractere da string "ola mundo" através de ptr[0] (acesso direto).
    printf("Conteúdo numérico (int) da primeira posição via index: %d\n", ptr[0]);
    // Acessamos o terceiro caractere da string "ola mundo" através de ptr + 2.
    printf("Conteúdo numérico (int) da segunda posição: %d\n", *(ptr + 2));
    // Acessamos o terceiro caractere da string "ola mundo" através de ptr[2].
    printf("Conteúdo numérico (int) da primeira posição via index: %d\n", ptr[2]);
    // Imprimir o char
    printf("Conteúdo char da primeira posição: %c\n", *ptr);
    // Acessamos o conteúdo completo da string "ola mundo" através de %s.
    printf("Conteúdo completo da string: %s\n", ptr);
    // Imprime o endereço em memória da string
    printf("Endereço ptr em memória: %p\n", ptr);
    // Imprimindo o Endereço do Próprio Ponteiro
    // O operador & retorna o endereço da variável ola em si.
    printf("Alguma coisa: %p\n", &ptr);

    // Declarar uma string como um array de caracteres em vez de um ponteiro
    char str[9] = "ola mundo";
    // Diferentemente de outras linguagens, a string é mutable se não declarar como const
    str[0] = 'O';  // agora a string passa a ser "Ola mundo"
    // Acessando o primeiro caractere (mesmo que o array não seja uma variável ponteiro)
    printf("Primeiro caractere: %c\n", str[0]);   // ou *str
    // Usando aritmética de ponteiros:
    printf("Terceiro caractere: %c\n", *(str + 2)); // 'a'
    // Imprimindo o endereço do primeiro elemento:
    printf("Endereço do array: %p\n", (void *)str);
    // func lib string.h para averiguar o tamanho da string
    printf("Tamanho da string: %lu\n", strlen(str)); // Imprime 9
    // copiando uma string para outro local
    char str2[10];
    strcpy(str2, str);

    printf("String copiada: %s", str2);
    // concatenar strings
    char s1[4] = "ola ";
    char s2[6] = " mundo";
    strcat(s1, s2);
    return 0;
};