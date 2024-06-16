#!/bin/bash

read x

if [ -f "$x" ]; then
    echo "$x é um arquivo."
else
    echo "$x não é um arquivo."
    exit 1 # Saia do script com código de erro 1
fi

echo "Continuando com o processamento..."
