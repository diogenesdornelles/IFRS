programa
{
	funcao inicio ()
	{
		logico isDec = verdadeiro
		inteiro vetor[7]
		para (inteiro i = 0; i < 7; i++)
		{
			leia(vetor[i])
		}
		para (inteiro k = 6; k >= 1; k--)
		{
			se (vetor[k] > vetor[k-1])
			{
				isDec = falso
				pare
			}
		}
		se (isDec)
		{
			escreva("é decrescente")
		} senao 
		{
			escreva("não é decrescente")
		}
	}
}