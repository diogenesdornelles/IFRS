programa
{
	inclua biblioteca Matematica --> m
	
	funcao vazio escolhe_a_b_c (real &coeficientes[])
	{
		escreva("------------------------------------------------------------\n")
		escreva("--------CALCULADORA DE RAÍZES DE FUNÇÕES QUADRÁTICAS--------\n")
		escreva("Informe o valor de 'a': \n")
		leia(coeficientes[0])
		escreva("Informe o valor de 'b': \n")
		leia(coeficientes[1])
		escreva("Informe o valor de 'c': \n")
		leia(coeficientes[2])
		escreva("------------------------------------------------------------\n")
	}

	funcao vazio acha_delta (real &delta, real &coeficientes[])
	{
		delta = m.potencia(coeficientes[1], 2.0) + (-1.0 * 4.0 * coeficientes[0] * coeficientes[2])
	}

	funcao logico valida_delta_e_coeficientes (real &delta, real &coeficientes[])
	{
		se (coeficientes[0] == 0.0)
		{
			escreva("Coeficiente a = 0. Não é uma equação do segundo grau.\n")
			retorne falso
		} 
		senao se (delta == 0.0)
		{
			escreva("Impossível calcular. Delta = 0. \n")
			retorne falso
		} 
		senao se (delta < 0.0)
		{
			escreva("As raízes não pertencem aos números reais. Delta < 0. \n")
			retorne falso
		} senao 
		{
			retorne verdadeiro
		}
	}

	funcao vazio calcula_resultado (real delta, real coeficientes[], real &raiz_1, real &raiz_2)
	{
		raiz_1 = (((-1.0 * coeficientes[1])) + m.raiz(delta, 2.0)) / (2.0 * coeficientes[0])
		raiz_2 = (((-1.0 * coeficientes[1])) + (-1.0 * m.raiz(delta, 2.0))) / (2.0 * coeficientes[0])
	}

	funcao vazio mostra_resultado (real raiz_1, real raiz_2, real coeficientes[])
	{		
		escreva("A função ", coeficientes[0], "X² + ", coeficientes[1], "X + ", coeficientes[2], " possui: \n")
		escreva("Raiz 1 = ",  raiz_1, "\n")
		escreva("Raiz 2 = ",  raiz_2, "\n")
	}
	
	funcao inicio()
	{
		const inteiro tamanho = 3
		real coeficientes[tamanho], delta = 0.0, raiz_1 = 0.0, raiz_2 = 0.0
		logico e_valido
		escolhe_a_b_c(coeficientes)
		acha_delta(delta, coeficientes)
		e_valido = valida_delta_e_coeficientes(delta, coeficientes)
		se (e_valido)
		{
			calcula_resultado(delta, coeficientes, raiz_1, raiz_2)
			mostra_resultado(raiz_1, raiz_2, coeficientes)
		}
		escreva("Fim de Programa!!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1131; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */