/* In javascript and portugol studio web the bellow code run, even without validation.
 *  https://dgadelha.github.io/Portugol-Webstudio/
 */ 


programa
{
	
	funcao inicio()
	{
		
		inteiro a,b,c, maior, medio, menor
		faca {
			leia(a)
			leia(b)
			leia(c)
		} enquanto (a == b e b == c)
		
		se (a > b) {
			maior = a
			menor = b
		} senao {
			maior = b
			menor = a
		}
		se (c > maior) {
      		maior = c
			se (a > b) {
				medio = a
				menor = b
			} senao {
				medio = b
				menor = a
			}
		}
		se (c > menor e c < maior) {
			medio = c
		}
		se (c < menor) {
      		menor = c
			se (a > b) {
				medio = b
			} senao {
				medio = a
			}
		}
		escreva(menor, medio, maior)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 52; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */