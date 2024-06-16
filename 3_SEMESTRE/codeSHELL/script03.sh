#!/bin/bash

read x 

# Exemplo de estrutura if simples
if [ $x -gt 10 ]; then
    echo "$x é maior que 10."
fi

# Exemplo de estrutura if-else
if [ $x -gt 10 ]; then
    echo "$x é maior que 10."
else
    echo "$x não é maior que 10."
fi

# Exemplo de estrutura if-elif-else
if [ "$x" -gt 10 ]; then
    echo "$x é maior que 10."
elif [ "$x" -eq 10 ]; then
    echo "$x é igual a 10."
else
    echo "$x é menor que 10."
fi

# capturando a variável especial passada como arg
if [ "$x" -gt "$1" ]; then
    echo "$x é maior que a variável argumento "$1"."
elif [ "$x" -eq "$1" ]; then
    echo "$x é igual a variável argumento "$1"."
else
    echo "$x é menor que variável argumento "$1"."
fi


# obtendo uma variável mediante comando linux
num_caracteres=$(wc -m script01.sh | awk '{print $1}')

if [ "$x" -gt "$num_caracteres" ]; then
    echo "$x é maior que a variável argumento "$num_caracteres"."
elif [ "$x" -eq "$num_caracteres" ]; then
    echo "$x é igual a variável argumento "$num_caracteres"."
else
    echo "$x é menor que variável argumento "$num_caracteres"."
fi