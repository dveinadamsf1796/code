// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
const testNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 20, 25];

// Check if each test number is prime and display the result
testNumbers.forEach(number => {
    console.log(`${number} is prime:`, isPrime(number));
});
