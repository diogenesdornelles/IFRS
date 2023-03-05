programa
{
	
	inteiro array[5] = {3, 5, 2, 4, 1}
	inteiro _
	inteiro cont = 0
	funcao inicio()
	{
		faca
		{
			cont = 0
				para (inteiro i = 0; i < 4; i++)
			{
				se (array[i] > array[i + 1])
				{
					_ = array[i]
					array[i] = array[i + 1]
					array[i + 1] = _
					cont++
				}
			} 
		} enquanto(cont != 0)
		para (inteiro i = 0; i < 5; i++)
		{
			escreva(array[i], " ")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 395; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */