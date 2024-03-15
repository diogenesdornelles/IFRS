export const factorial = (x: number): number => {
    var res = 0;
    if (x == 0)
        res = 1;
    else {
        res = x * factorial(x - 1);
    }
    return res;
}