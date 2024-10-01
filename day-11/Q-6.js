function calculateFactorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a positive integer.');
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log(calculateFactorial(5)); 


