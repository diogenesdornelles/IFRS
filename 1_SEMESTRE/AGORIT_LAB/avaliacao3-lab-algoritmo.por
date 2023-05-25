programa
{
	
	funcao inicio()
	{
		inteiro numero = 0, chute = 1, tentativa = 0
		logico acertou = falso
		escreva("Amigo 'A' vai pensar em um número \n")
		faca
		{
			leia(numero)
			limpa()
			se (numero < 0)
			{
				escreva("O número deve ser positivo! Digite outro... \n")
			}
		} enquanto (numero < 0)
		
		limpa()
		enquanto (nao acertou)
		{
			escreva("\n")
			escreva("Amigo 'B' vai chutar. Digite um número: \n")
			leia(chute)
			limpa()
			tentativa++
			se (chute < numero)
			{
				escreva("Chutou baixo! Tente novamente! \n")
				escreva("Você está na tentativa de nº ", tentativa, "\n")
			} 
			senao se (chute > numero)
			{
				escreva("Chutou alto! Tente novamente! \n")
				escreva("Você stá na tentativa de nº ", tentativa, "\n")
			} senao {
				acertou = verdadeiro
			}
		} 
		escreva("Parabéns! 'A' escolheu o número ", numero, "! \n")
		escreva("Foram ao total ", tentativa, " tentativas!")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 458; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
