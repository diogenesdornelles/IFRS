// Neste algoritmo deve-se percorrer a sequência da esquerda para a direita, ou seja, em cada rodada elege-se um elemento para análise
// (inciando pela esquerda) e procura-se a posição em que ele deve ser inserido, sempre em comparação com seus anteriores. Ao descobrir
// a posição de inserção todos os elementos entre esta posição e a posição onde está o elemento eleito, são deslocados uma posição para
//  direita, transferindo o elemento eleito para a posição de inserção.

const my_array_test_insert = [10, 300, 0, 100, 60, -10, 100, 40];

// se array prossegue
if (my_array_test_insert instanceof Array) {
  // loop da posição 1 até length - 1, para definir cada elemento escolhido. De 1 em diante porque deve haver um elemento antecessor para análise.
  for (let i = 1; i < my_array_test_insert.length; i++) {
    // atribui-se à variável chosen o valor da posição my_array_test_insert[i]
    const chosen = my_array_test_insert[i];
    // loop regressivo da posição anterior ao escolhido até 0, para definir os comparados
    for (let j = i - 1; j >= 0; j--) {
      const compared = my_array_test_insert[j];
      // compara cada elemento anterios com o escolhido
      if (chosen < compared) {
        // se chosen menor, coloca o comparado na posição seguinte
        my_array_test_insert[j + 1] = compared;
        // passa escolhido para a posição do comparado
        my_array_test_insert[j] = chosen;
      }
    }
  }
}

console.log(my_array_test_insert);
