programa
{
	funcao inicio ()
	{
	
		real soma = 0, n = 1.0, k = 1.0, p
		enquanto(p <= 10100)
		{
			p = k * (k + 1)
			soma = n / p
			k++
		}
		escreva(soma)
	}
}