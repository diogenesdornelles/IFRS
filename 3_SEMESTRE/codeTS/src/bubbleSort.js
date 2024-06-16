// O Bubble Sort é um algoritmo de ordenação que percorre repetidamente o array, comparando pares de elementos adjacentes e trocando-os se estiverem na ordem errada. 
// Esse processo continua até que o array esteja completamente ordenado, com os maiores elementos "subindo" para o final do array a cada passagem.
function bubbleSort(arr) {
    var n = arr.length;
    var swapped;
    do { // faça enquanto tiver trocas
        swapped = false; // Inicializa a variável que verifica se houve troca
        for (var i = 0; i < n - 1; i++) {
            // Percorre o array até o penúltimo elemento
            if (arr[i] > arr[i + 1]) {
                // Troca de lugar se o atual for maior
                var temp = arr[i];
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
var arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(arr1));
