programa
{
	funcao inicio ()
	{
		
		inteiro soma = 0, n = 1
		
		enquanto(n <= 200)
		{
			se (n % 2 == 0)
			{
				soma += ((-1) * n)
			} senao
			{
				soma += n
			}
			n++
		}
		escreva(soma)
		
	}
}