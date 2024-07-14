"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
var selectionSort = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var idxMenor = 0;
        var menor = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < menor) {
                idxMenor = j;
                menor = arr[j];
            }
        }
        var _ = arr[i];
        arr[i] = arr[idxMenor];
        arr[idxMenor] = _;
    }
    return arr;
};
exports.arr = [3, 1, 9, 3, 1, 8];
console.log(selectionSort(exports.arr));
