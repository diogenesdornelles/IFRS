#!/bin/bash

read x

if [ "$x" -gt 10 ] && [ "$x" -lt 20 ]; then
    echo "$x está entre 10 e 20."
fi

if [ "$x" -eq 0 ] || [ "$x" -eq 10 ]; then
    echo "$x é igual a 0 ou 10."
fi

if [ ! "$x" -eq 5 ]; then
    echo "$x não é igual a 5."
fi
