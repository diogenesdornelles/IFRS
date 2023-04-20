programa
{
	funcao inicio ()
	{
		
		inteiro n, n1 = 1, n2 = 1, fibbo
		leia(n)
		escreva(n1, " ", n2, " ")
		enquanto (fibbo <= n)
		{
			fibbo = n1 + n2
			escreva(fibbo, " ")
			n1 = n2
			n2 = fibbo
		}
	}
}