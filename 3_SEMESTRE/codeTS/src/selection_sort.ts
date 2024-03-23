// Criar um programa que recebe um vetor com valores aleatórios, posteriormente ordenar os valores em ordem crescente e mostrar os valores ordenados.

const array_test = [10, 300, 0, 100, 60, 100, 40];
// selection sort

// se array prossegue
if (array_test instanceof Array) {
  // define variável para a primeira posição à esquerda a ser percorrida
  let left_position: number = 0;
  // define variável para a menor posição
  let minor_position: number = -1;
  // enquanto não der overflow na posição à esquerda, prossegue
  while (left_position < array_test.length) {
    // define menor por default como a primeira posição à esquerda
    let minor = array_test[left_position];
    // define variável para dizer que houve ordenação
    let sorted: boolean = false;
    // percorre array sucessivamente a partir de cada valor de left position
    for (let i = left_position; i < array_test.length; i++) {
      // se a posição for menor
      if (array_test[i] < minor) {
        // define menor posição em i, menor como valor da posição i e lança flag no sentido de que houve ordenação
        minor_position = i;
        minor = array_test[i];
        sorted = true;
      }
    }
    if (sorted) {
      // substitui valores se houver ordenação
      const _ = array_test[left_position];
      array_test[left_position] = minor;
      array_test[minor_position] = _;
    }
    // incrementa a posição para fatiar o array a partir da seguinte
    left_position++;
  }
}

console.log(array_test);
