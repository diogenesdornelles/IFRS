programa
{
	
	funcao inicio()
	{
	
		const inteiro linhas = 4
		const inteiro colunas = 4
		inteiro matrizA[linhas][colunas]
		inteiro matrizB[linhas][colunas]
		para (inteiro i = 0; i < linhas; i++)
		{
			escreva("Lendo os dados da ", i + 1, "ª linha. \n")
			para (inteiro k = 0; k < colunas; k++)
			{
				se (k == 0) {
					escreva("Lendo os dados da ", k + 1, "ª coluna. \n")
				}
				escreva("Digite um número referente a ", i + 1, "ª linha", "e a ", k + 1, "ª coluna: \n")
				leia(matrizA[i][k])
				limpa()
			}
		}
		
		para (inteiro i = 0; i < linhas; i++)
		{
			para (inteiro k = 0; k < colunas; k++)
			{
				matrizB[i][k] = matrizA[i][k]
			}
		}
		
		para (inteiro i = 0; i < linhas; i++)
		{
			para (inteiro k = 0; k < colunas; k++)
			{
				se (i % 2 != 0 e k % 2 != 0) {
					matrizB[i][k] = matrizB[i][k] * 2
				} senao se (k % 2 == 0) {
					matrizB[i][k] = matrizB[i][k] * 10
				}
			}
		}
		
		escreva("==Matriz original \n")
		para (inteiro i = 0; i < linhas; i++)
		{
			para (inteiro k = 0; k < colunas; k++)
			{
				se (matrizA[i][k] < 10)
				{
					escreva(matrizA[i][k], "    ")
				}
				se (matrizA[i][k] >= 10 e matrizA[i][k] < 100)
				{
					escreva(matrizA[i][k], "   ")
				}
				se (matrizA[i][k] >= 100)
				{
					escreva(matrizA[i][k], "  ")
				}
			}
			escreva("\n")
		}
		
		escreva("\n")
		escreva("==Nova matriz alterada é \n")
		para (inteiro i = 0; i < linhas; i++)
		{
			para (inteiro k = 0; k < colunas; k++)
			{
				se (matrizB[i][k] < 10)
				{
					escreva(matrizB[i][k], "    ")
				}
				se (matrizB[i][k] >= 10 e matrizB[i][k] < 100)
				{
					escreva(matrizB[i][k], "   ")
				}
				se (matrizB[i][k] >= 100)
				{
					escreva(matrizB[i][k], "  ")
				}
			}
			escreva("\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 164; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */