#!/bin/bash

# Vamos permitir a entrada de valores pelo usuário
echo --------------------------PRIMEIRA_ATIVIDADE--------------------------
echo "Por favor, insira cinco valores que podem ser textuais ou numéricos:"
echo ----------------------------------------------------------------------
read -p "Valor_1: " v1
echo ----------------------------------------------------------------------
read -p "Valor_2: " v2
echo ----------------------------------------------------------------------
read -p "Valor_3: " v3
echo ----------------------------------------------------------------------
read -p "Valor_4: " v4
echo ----------------------------------------------------------------------
read -p "Valor_5: " v5
echo ----------------------------------------------------------------------
# Inserindo-os em variáveis
VAR1=$v1
VAR2=$v2
VAR3=$v3
VAR4=$v4
VAR5=$v5

clear
echo --------------------------PRIMEIRA_ATIVIDADE--------------------------
# Mostrar os valores das variáveis
echo "Valores informados pelo usuário:"
echo "VAR1: $VAR1"
echo "VAR2: $VAR2"
echo "VAR3: $VAR3"
echo "VAR4: $VAR4"
echo "VAR5: $VAR5"

sleep 1
echo "....."
sleep 1
echo "...."
sleep 1
echo "..."
sleep 1
echo ".."
sleep 1
echo "."
sleep 1
clear
echo -----------------------SEGUNDA_ATIVIDADE--------------------------
# Atribundo a DF1 o resultado da execução do comando df
DF1=$(df)

# Imprimir a variável DF1
echo "Informações sobre espaço, livre e ocupado, das partições do sistema(df): "
echo "$DF1"

sleep 1
echo "....."
sleep 1
echo "...."
sleep 1
echo "..."
sleep 1
echo ".."
sleep 1
echo "."
sleep 1
clear
echo -----------------------TERCEIRA_ATIVIDADE-----------------------
# À DATA1 atribuir o resultado da execução do comando date
DATA1=$(date)

# Imprimir a variável DATA1
echo "Data e a hora do sistema(date):"
echo "$DATA1"
