// O Bubble Sort é um algoritmo de ordenação que percorre repetidamente o array, comparando pares de elementos adjacentes e trocando-os se estiverem na ordem errada. 
// Esse processo continua até que o array esteja completamente ordenado, com os maiores elementos "subindo" para o final do array a cada passagem.
// Por isso, usa-se a instrução do while, que em conjunto com a variável de controle swapped, garante que os laços ocorram até que não tenha havido mais ordenações


function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;
    do { // faça enquanto tiver trocas
        swapped = false; // Inicializa a variável que verifica se houve troca
        for (let i = 0; i < n - 1; i++) {
            // Percorre o array até o penúltimo elemento
            if (arr[i] > arr[i + 1]) {
                // Troca de lugar se o atual for maior
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Marca que houve troca
            }
        }
        n--; // Reduz o tamanho do array a ser percorrido, já que o maior elemento está no final
    } while (swapped); // Repete o processo enquanto houver trocas
    return arr; // Retorna o array ordenado
}

// Exemplo de uso
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(arr1));
