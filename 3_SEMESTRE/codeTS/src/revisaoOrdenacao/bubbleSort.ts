export const bubbleSort = (arr: number[]) => {
  let swapped: boolean;
  let n: number = arr.length;
  let temp: number;
  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
};

export const arr = [3, 1, 9, 3, 1, 8];

console.log(bubbleSort(arr));
