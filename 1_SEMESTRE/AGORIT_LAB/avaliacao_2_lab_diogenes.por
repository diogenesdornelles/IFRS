programa
{
	
	funcao inicio()
	{
		real distancia, consumo, media_consumo, velocidade_media, tempo
		escreva("Forneça a distância rodada (Km): \n")
		leia(distancia)
		escreva("Forneça o consumo total (Litros): \n")
		leia(consumo)
		media_consumo = distancia / consumo
		escreva("Forneça o tempo de viagem (Horas): \n")
		leia(tempo)
		velocidade_media = distancia / tempo
		escreva("A velocidade media da viagem foi de: ", velocidade_media, "\n")
		escreva("Velocidade media da viagem acima de 60km/h? ", velocidade_media >= 60, "\n")
		escreva("A média de combustíveis gastos foi de: ", media_consumo, "\n")
		escreva("A média de combustível foi boa? ", media_consumo > 10, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 695; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */