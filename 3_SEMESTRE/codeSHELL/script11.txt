# -p torna amigável a entrada
read -p "Informe sua idade: " idade

IDADE=$idade

if [ "$IDADE" -ge 18 ]; then
  echo "Usuário maior de idade"
  exit
fi
if [ "$IDADE" -ge 0 ]; then
  echo "Usuário menor de idade"
  exit
fi
echo "entrada inválida"
