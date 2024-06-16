# test: verificar tipos de arquivos e comparar valores

echo sim ou nao
read RESPOSTA
test $RESPOSTA = "sim" && exit
echo O usuário não digitou não