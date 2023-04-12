programa
{
	funcao inicio()
	{
		const inteiro n = 5
		inteiro arr[n], input, i = 0
		logico is_primo = verdadeiro
		para (; i < n; i++)
		{
			faca
			{
				escreva("Digite um número maior que 1: ")
				leia(input)
				limpa()
			} enquanto (input < 2)
		arr[i] = input
		}
		i = 0
		para (; i < n; i++)
		{
			para (inteiro k = 2; k < arr[i]; k++)
			{
				se (arr[i] % k == 0) 
				{
					is_primo = falso
				}
			}
			se (is_primo) 
			{
				escreva("O número ", arr[i], " é primo\n")
			}
			is_primo = verdadeiro
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 227; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */