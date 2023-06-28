programa
{
	inclua biblioteca Util --> u
	inclua biblioteca Matematica --> m

	funcao vazio mostra_menu ()
	{
		escreva("-------------------------------\n")
		escreva("---------------MENU------------\n")
		escreva("Selecione o tipo de cálculo que deve ser realizado: \n")
		escreva("101 - Raiz quadrada\n")
		escreva("102 - A metade\n")
		escreva("103 - 10% do número\n")
		escreva("104 - O dobro\n")
		escreva("105 - Potência de dois números\n")
		escreva("106 - Sair\n")
		escreva("-------------------------------\n")
		escreva("Escolha uma opção acima:\n")
	}
	funcao real raiz_q (real n) 
	{
		real resultado
		resultado = m.raiz(n, 2.0)
		retorne m.arredondar(resultado, 3)
	}

	funcao real metade (real n) 
	{
		real resultado
		resultado = n / 2
		retorne m.arredondar(resultado, 3)
	}

	funcao real dobro (real n) 
	{
		real resultado
		resultado = n * 2
		retorne m.arredondar(resultado, 3)
	}
	funcao real porcento (real n) 
	{
		real resultado
		resultado = n * 0.10
		retorne m.arredondar(resultado, 3)
	}

	funcao real potencia_m (real n, real m) 
	{
		real resultado
		resultado = m.potencia(n, m)
		retorne m.arredondar(resultado, 3)
	}
	funcao inicio()
	
	{
		real numero, resultado = 0.0, potencia = 0.0
		logico prosseguir = verdadeiro
		inteiro opcao
		escreva("-------------------------------\n")
		escreva("Escolha um número: \n")
		leia(numero)
		limpa()
		enquanto(prosseguir) {
			logico ha_resultado = falso
			mostra_menu()
			leia(opcao)
			escolha(opcao)
			{
				caso 101: {
					resultado = raiz_q(numero)
					ha_resultado = verdadeiro
					pare
				}
				caso 102: {
					resultado = metade(numero)
					ha_resultado = verdadeiro
					pare
				}
				caso 103: {
					resultado = porcento(numero)
					ha_resultado = verdadeiro
					pare
				}
				caso 104: {
					resultado = dobro(numero)
					ha_resultado = verdadeiro
					pare
				}
				caso 105: {
					escreva("-------------------------------\n")
					escreva("Escolha uma potência: \n")
					leia(potencia)
					resultado = potencia_m(numero, potencia)
					ha_resultado = verdadeiro
					pare
				}
				caso 106: {
					prosseguir = falso
					pare
				}
				caso contrario: {
					escreva("Escolha uma opção válida!")
					u.aguarde(2000)
					pare
				}
			}
			se (ha_resultado)
			{
				escreva("O resultado é: ", resultado)
				u.aguarde(2000)
				limpa()
			} senao {
				limpa()
			}
		}
		escreva("Fim de Programa!!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 271; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */