echo comparação numérica
test 1 -eq 1
[ 1 -eq 1 ]
 # -eq(igual), -ne (não igual), -gt (maior), -ge(maior igual), -lt(menor), -le (menor igual)

echo comparação strings
test "a" = "a"
[ "a" = "a" ]
# =, !=, -n (nao vazia), -z vazia

arquivo="meuarquivo.txt"
diretorio="folder"

echo test de arquivos / diretorios
# Arquivo existe
test -e $arquivo
[ -e $arquivo ]

# arquivo regular
test -f $arquivo
[ -f $arquivo ]

# diretorio existe
test -d $diretorio
[ -d $diretorio ]

# arquivo é legivel
test -r $arquivo
[ -r $arquivo ]

# arquivo é gravável
test -w $arquivo
[ -w $arquivo ]

# Arquivo é executável
test -x $arquivo
[ -x $arquivo ]

# Arquivo não vazio
test -s $arquivo
[ -s $arquivo ]

echo testes logicos
# E lógico
test 5 -gt 4 -a 1 -lt 2 
[ 5 -gt 4  -a 1 -lt 2  ]

# OU lógico
test 1 -gt 2 -o 1 -lt 2 
[ cond1 -o cond2 ]

# negação
test ! 1 -lt 2 
[ ! 1 -lt 2  ]

echo exemplos
if [ -e "$arquivo" ]; then
  echo "O arquivo existe."
  if [ -r "$arquivo" ]; then
    echo "O arquivo é legível."
  else
    echo "O arquivo não é legível."
  fi
else
  echo "O arquivo não existe."
fi


if [ $a -gt 0 -a $b -gt 0 ]; then
  echo "Ambas as variáveis são maiores que 0."
else
  echo "Uma ou ambas as variáveis não são maiores que 0."
fi

# Uso de [[]] permite permite o uso de operadores lógicos mais intuitivos como && para AND e || para OR, além de suportar expressões regulares e ser mais robusto para manipulações de strings e variáveis
if [[ $a -gt 0 && $b -gt 0 ]]; then
  echo "Ambas as variáveis são maiores que 0."
fi

# Agrupamento de condições: Quando as condições são mais complexas, é recomendável usar parênteses () ou a dupla colchete [[ ]] para evitar ambiguidades e melhorar a clareza do código.
if [ \( $a -gt 0 \) -a \( $b -gt 0 \) ]; then
  echo "Ambas as variáveis são maiores que 0."
fi

arquivo="meuarquivo.txt"
minhastring="Olá, Mundo!"

#Testando uma combinação de condições de arquivo e string. Vamos verificar se um arquivo existe e se uma string não está vazia.
if [ -e "$arquivo" -a -n "$minhastring" ]; then
  echo "O arquivo existe e a string não está vazia."
else
  echo "O arquivo não existe ou a string está vazia."
fi