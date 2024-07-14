"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
var insertionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var pivot = arr[i];
        var idx = i - 1;
        while (pivot < arr[idx]) {
            arr[idx + 1] = arr[idx];
            idx--;
        }
        arr[idx + 1] = pivot;
    }
    return arr;
};
exports.arr = [55, 9];
console.log(insertionSort(exports.arr));
