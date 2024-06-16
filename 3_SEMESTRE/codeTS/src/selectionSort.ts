// O Selection Sort é um algoritmo de ordenação que divide o array em uma parte ordenada e uma parte não ordenada.
// Ele repetidamente seleciona o menor elemento da parte não ordenada e o troca com o primeiro elemento da parte não ordenada,
// expandindo a parte ordenada um elemento por vez até que todo o array esteja ordenado.
// https://s-satsangi.medium.com/insertion-sort-selection-sort-and-bubble-sort-5eb16d55a4de

function selectionSort(arr: number[]): number[] {
    let n = arr.length;
    // Itera sobre cada elemento do array, exceto o último, pois ele será ordenado automaticamente
    for (let i = 0; i < n - 1; i++) { // cria uma primeira iteração, que percorre o array de 0 até o penúltimo
        let minIdx = i; // Assume que o menor elemento é o atual
        // Itera sobre a parte não ordenada do array, de i a arr.length
        for (let j = i + 1; j < n; j++) { // cria uma segunda iteração, que percorre de n + 1 até o fim do array. É a parte não ordenada.
            // Se encontrar um elemento menor que o atual mínimo, atualiza o índice do mínimo
            if (arr[j] < arr[minIdx]) { // se o valor da parte ordenada for maior, então
                // Encontra o índice do menor elemento na parte não ordenada
                minIdx = j; // atualiza o índice do menor elemento encontrado
            }
        }
        // Se o menor elemento não está na posição inicial da parte não ordenada, troca-os de lugar
        if (minIdx !== i) { // se os índices forem diferentes, então troca
            // Troca o menor elemento encontrado com o elemento atual
            let temp = arr[i]; // temp passa a ser o valor de arr[i], que está na parte ordenada
            arr[i] = arr[minIdx]; // a parte ordenada em arr[i] passa a ter o valor menor
            arr[minIdx] = temp; // o valor maior que está guardado em temp passa a parte não ordenada
        }
    }
    return arr; // Retorna o array ordenado
}

// Exemplo de uso
const arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort:", selectionSort(arr3));