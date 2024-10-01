function PrimeNumbers(n) {
    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Array to store the first n prime numbers
    const primes = [];
    let number = 2; // Start checking from the first prime number

    // Continue until we have n prime numbers
    while (primes.length < n) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }

    return primes;
}
console.log(PrimeNumbers(5)); 
