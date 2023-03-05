
programa
{
	
	funcao inicio ()
	{
		// linhas vs colunas: horizontal, vertical
		// n. linhas: número de subconjuntos da matriz
		// n. colunas: número de elementos de um subconjunto (M[0][0] é o header)
	    //   1  2  3  4  5
		// 1 1  2 ..
		// 2 br ag ..
		// 3 pt es ..
		// 4 real peso ..
		inteiro opcao
		cadeia continuar
		cadeia paises[4][5] = {{"1","2","3","4","5"}, {"Brasil","Argentina","Uruguai","Paraguai","Chile"}, {"Português", "Espanhol", "Espanhol", "Espanhol", "Espanhol"}, {"Real", "Peso argentino", "Peso uruguaio", "Guarany", "Peso chileno"}}
		faca 
		{
			limpa()
			escreva("Escolha uma opção: \n")
			para (inteiro i = 0; i < 5; i++)
			{
				escreva("( ", paises[0][i], " )", " - ", paises[1][i], "\n")
			}
		        leia(opcao)
			limpa()
			escreva("Opção escolhida:", opcao, "\n")
			escolha(opcao)
		        {
			    caso 1: para (inteiro i = 0; i < 4; i++)
			            { 
				        escreva(paises[i][0], "-")
			            }
					pare
			    caso 2: para (inteiro i = 0; i < 4; i++)
			            {
			        	escreva(paises[i][1], "-")
			            }
					pare
			    caso 3: para (inteiro i = 0; i < 4; i++)
			            {
			        	escreva(paises[i][2], "-")
			            }
					pare
			    caso 4: para (inteiro i = 0; i < 4; i++)
			            {
			        	escreva(paises[i][3], "-")
			            }
					pare
			    caso 5: para (inteiro i = 0; i < 4; i++)
				    {
				        escreva(paises[i][4], "-")
				    }
					pare
			    caso contrario: escreva("Essa opção é inválida!")
		        }
			escreva("\n")
			escreva("Deseja continuar (s/n)")
			leia(continuar)
		} enquanto(continuar != "n")
		escreva("Até mais!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1686; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */