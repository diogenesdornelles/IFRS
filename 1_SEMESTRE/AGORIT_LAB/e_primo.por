programa
{
	funcao inicio ()
	{
		
		inteiro n, f
		logico primo = verdadeiro 
		leia(n)
		para (inteiro i = 2; i <= n; i++)
		{
			f = i - 1
			para (inteiro k = 2; k <= f; k++)
			{
				se (i % k == 0)
				{
					primo = falso
				}
			}
			se (primo)
			{
				escreva(i)
			}
			primo = verdadeiro
		}
		
	}
}