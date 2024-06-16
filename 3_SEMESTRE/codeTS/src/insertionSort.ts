// O Insertion Sort é um algoritmo de ordenação que constrói a classificação final de um array um elemento por vez.
// Ele toma cada elemento do array e o insere na posição correta na parte já ordenada do array, que é a parte à esquerda,
// deslocando os elementos maiores para a direita conforme necessário.
// A parte ordenada estará entre índice 0 e i - 1. 
// A variável toInsert (i) é o primeiro elemento do array a direita (parte não ordenada)
// https://s-satsangi.medium.com/insertion-sort-selection-sort-and-bubble-sort-5eb16d55a4de

function insertionSort(arr: number[]): number[] {
  // O loop começa no segundo elemento (índice 1) e percorre até o final do array
  for (let i = 1; i < arr.length; i++) {
      let pivot = arr[i]; // O elemento atual a ser inserido na parte ordenada do array
      let j = i - 1; // O índice do último elemento da parte já ordenada
      // Enquanto j for maior ou igual a 0 e o elemento arr[j] for maior que o pivot
      while (j >= 0 && arr[j] > pivot) {
          // Move os elementos maiores que a key uma posição para a direita
          arr[j + 1] = arr[j];
          j--; // Decrementa j para continuar verificando os elementos anteriores
      }
      // Insere o pivot na posição correta na parte ordenada
      arr[j + 1] = pivot;
  }
  return arr; // Retorna o array ordenado
}

// Exemplo de uso
const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Insertion Sort:", insertionSort(arr2));