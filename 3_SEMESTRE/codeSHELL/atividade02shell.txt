# Alterar o (último) script shell do vídeo para: 
# - imprimir a mensagem "não é arquivo, nem diretório" se este for o caso. 
# Exemplo: um nome de caminho inexistente.

echo Entre com um caminho identificando arquivo ou diretorio

read FILENAME

test -d "$FILENAME" && echo "O caminho especificado trata-se de um diretorio." || ( test -f "$FILENAME" && echo "O caminho especificado trata-se de um arquivo." || echo "O caminho especificado não existe." )