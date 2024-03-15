export const fibonacci = (num: number): number => {
    var res = 0;
    if (num == 1 || num == 2)
        res = 1;
    else
        res = fibonacci(num - 1) +
            fibonacci(num - 2);
    return res;
}