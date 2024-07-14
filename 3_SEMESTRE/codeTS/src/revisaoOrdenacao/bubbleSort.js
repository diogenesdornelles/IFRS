"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.bubbleSort = void 0;
var bubbleSort = function (arr) {
    var swapped = false;
    var n = arr.length;
    do {
        swapped = false;
        for (var i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                var _ = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = _;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
};
exports.bubbleSort = bubbleSort;
exports.arr = [3, 1, 9, 3, 1, 8];
console.log((0, exports.bubbleSort)(exports.arr));
