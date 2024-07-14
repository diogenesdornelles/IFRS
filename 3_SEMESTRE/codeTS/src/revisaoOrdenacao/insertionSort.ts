const insertionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    const pivot = arr[i];
    let idx = i - 1;
    while (pivot < arr[idx]) {
      arr[idx + 1] = arr[idx];
      idx--;
    }
    arr[idx + 1] = pivot;
  }
  return arr;
};

export const arr = [55, 9];

console.log(insertionSort(arr));
