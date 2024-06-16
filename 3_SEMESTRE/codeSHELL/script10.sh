echo digite um numero entre 0 e 10
read NUMBER
test $NUMBER -le 0 -o $NUMBER -gt 10 && echo digitação incorreta || echo digitação correta: $NUMBER
