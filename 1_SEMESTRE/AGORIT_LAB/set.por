programa
{
	
	funcao inicio ()
	{
		const inteiro original_size = 6
		inteiro arr1[original_size] = {1,4,9,3,4,3}, arr2[original_size], cont = 0, qtn_values_not_repeated, set
		para (inteiro i = 0; i < original_size - 1; i++)
		{
			para (inteiro q = i + 1; q < original_size; q++)
			{
				se (arr1[i] == arr1[q])
				{
					arr2[q] = 1
					cont++
				}
			}
		}
		
		qtn_values_not_repeated = original_size - cont
		turn_into_set(qtn_values_not_repeated, arr1, arr2, original_size)			
	}

	
	funcao turn_into_set(inteiro new_array_size, inteiro arr1[], inteiro arr2[], inteiro original_size)
	{
		inteiro arr3[4], index = 0
		para (inteiro i = 0; i < original_size ; i++)
		{
			se (arr2[i] != 1)
			{
				arr3[index] = arr1[i]
				index++
			}
		}
		para (inteiro i = 0; i < new_array_size ; i++)
		{
			escreva(arr3[i])
		}
	}
	
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 836; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */