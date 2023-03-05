programa
{
	inteiro a = 1
	inteiro b = 2
	inteiro c
	inteiro n
	funcao inicio()
	{
		escreva("Digite um valor:")
		leia(n)
		escreva("O ", n, " fibonacci é ", meu_fibbo(n))
	}
	funcao inteiro meu_fibbo(inteiro _n) 
	{
		para (inteiro i = 3; i <= _n; ++i)
		{
			c = b + a
			a = b
			b = b
		}
		retorne c
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 294; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */