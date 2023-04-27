programa
{
	funcao inicio ()
	{
		
		real soma = 0.0, n = 1.0
		inteiro k = 1
		
		enquanto(k <= 99)
		{
			se (k % 2 != 0)
			{
				soma += k
				k++
			} senao
			{
				soma += (n / k)
				k++
			}
		}
		escreva(soma)
		
	}
}
