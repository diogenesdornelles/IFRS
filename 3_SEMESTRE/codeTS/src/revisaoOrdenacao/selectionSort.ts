const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let idxMenor = i;
    let menor = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < menor) {
        idxMenor = j;
        menor = arr[j];
      }
    }
    const temp = arr[i];
    arr[i] = arr[idxMenor];
    arr[idxMenor] = temp;
  }
  return arr;
};

export const arr = [3, 1, 9, 3, 1, 8];

console.log(selectionSort(arr));
