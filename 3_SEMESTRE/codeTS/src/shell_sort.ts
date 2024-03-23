// Shellsort , também conhecido como classificação Shell ou método Shell , é uma classificação por comparação no local .
// Pode ser visto como uma generalização da classificação por troca ( classificação por bolha ) ou classificação por inserção
// ( classificação por inserção ). [3] O método começa classificando pares de elementos distantes uns dos outros e, em seguida,
// reduzindo progressivamente a lacuna entre os elementos a serem comparados. Ao começar com elementos distantes, ele pode mover
//  alguns elementos fora do lugar para a posição mais rapidamente do que uma simples troca de vizinho mais próximo.

export const applyInsertionSort = (arr: Array<number>) => {
  // define variável para a primeira posição à esquerda a ser percorrida
  let left_position: number = 0;
  // define variável para a menor posição
  let minor_position: number = -1;
  // enquanto não der overflow na posição à esquerda, prossegue
  while (left_position < arr.length) {
    // define menor por default como a primeira posição à esquerda
    let minor = arr[left_position];
    // define variável para dizer que houve ordenação
    let sorted: boolean = false;
    // percorre array sucessivamente a partir de cada valor de left position
    for (let i = left_position; i < arr.length; i++) {
      // se a posição for menor
      if (arr[i] < minor) {
        // define menor posição em i, menor como valor da posição i e lança flag no sentido de que houve ordenação
        minor_position = i;
        minor = arr[i];
        sorted = true;
      }
    }
    if (sorted) {
      // substitui valores se houver ordenação
      const _ = arr[left_position];
      arr[left_position] = minor;
      arr[minor_position] = _;
    }
    // incrementa a posição para fatiar o array a partir da seguinte
    left_position++;
  }
};
