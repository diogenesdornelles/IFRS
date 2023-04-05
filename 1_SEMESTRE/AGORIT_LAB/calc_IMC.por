programa
{
	
	funcao inicio()
	{
		real peso_abaixo = 18.5, peso_normal = 25.0, pre_obeso = 30.0, obeso_1 = 35.0, obeso_2 = 40.0, peso, altura, IMC
		escreva("--------------------------------------------------------------------------------------------------------------------------------\n")
		escreva("informe o seu peso(KG): \n")
		leia(peso)
		escreva("Informa sua altura (M): \n")
		leia(altura)
		IMC = peso / (altura * altura)
		limpa()
		escreva("--------------------------------------------------------------------------------------------------------------------------------\n")
		escreva("Seu IMC é de ", IMC, " ")
		se (IMC < peso_abaixo) {
			escreva("e sua classificação de peso é 'abaixo do peso'.")  
		} senao {
			se (IMC < peso_normal) {
				escreva("e sua classificação de peso é 'peso normal'.") 
			} senao {
				se (IMC < pre_obeso) {
					escreva("e sua classificação de peso é 'pré-obeso'.") 
				} senao {
					se (IMC < obeso_1) {
						escreva("e sua classificação de peso é 'obeso classe I'.") 
					} senao {
						se (IMC < obeso_2) {
							escreva("e sua classificação de peso é 'obeso classe II'.") 
						} senao {
							escreva("e sua classificação de peso é 'obeso classe III'.") 
						}
					}
				}
				
			}
		}
		escreva("\nObs.: O índice de massa corporal (IMC) é calculado dividindo o peso(em Kg) de uma pessoa pela sua altura(em metros) ao quadrado.")
		escreva("\n--------------------------------------------------------------------------------------------------------------------------------")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 759; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */