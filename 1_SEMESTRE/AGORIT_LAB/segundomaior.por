programa
{
	funcao inicio ()
	{
		inteiro vetor[5], maior, maior2
		para (inteiro i = 0; i < 5; i++)
		{
			leia(vetor[i])
		}
		maior = vetor[0]
		para (inteiro k = 1; k < 5; k++)
		{
			se (maior < vetor[k])
			{
				maior = vetor[k]
			}
		}
		maior2 = vetor[0]
		para (inteiro j = 1; j < 5; j++)
		{
			se (maior != vetor[j] e maior2 < vetor[j])
			{
				maior2 = vetor[j]
			}
		}
	
		escreva(maior2)
		
		
		
		
		
		
		
		
	}
}