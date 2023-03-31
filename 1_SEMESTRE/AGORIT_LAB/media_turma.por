programa
{
	funcao inicio ()
	{
		
		real altura, menor, maior, m_m, m_t, ac_a_m = 0, ac_a_t = 0, n_m = 0
		caracter sexo
		para (inteiro i = 0; i < 2; i++)
		{
			escreva("Informe a altura(m): ")
			leia(altura)
			escreva("Informe o sexo(m ou f): ")
			leia(sexo)
			se (sexo == 'f')
			{
				ac_a_m += altura
				n_m++
			}
			
			se (altura > maior)
			{
				maior = altura
			}
			se (i == 1)
			{
				menor = altura
			} senao {
				se (altura < menor)
				{
					menor = altura
				}
			}
			ac_a_t += altura
			limpa()
		}
		se (n_m > 0) 
		{
            m_m = ac_a_m / n_m
		} senao {
			m_m = 0
		}
		
		m_t = ac_a_t / 2
		
		escreva("Média de altura mulheres: ", m_m, "\nMedia de altura turma: ", m_t, "\nMais alto da turma: ", maior, "\nMenor da turma: ", menor)
	}
}