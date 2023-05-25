programa
{
	funcao inicio ()
	{
		const inteiro tamanho = 3
		inteiro m[tamanho][tamanho] = {{0,4,0}, {0,8,3}, {5,0,0}}
		inteiro v[tamanho] = {0,0,0}
		para (inteiro linha = 0; linha < tamanho; linha++)
		{
			para (inteiro coluna = 0; coluna < tamanho; coluna++)
			{
				se (v[linha] < m[linha][coluna])
				{
					v[linha] = m[linha][coluna]
				}
			}
		}
		
		
		escreva(v)
		
		
		
		
	}
}