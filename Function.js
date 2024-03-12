// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    // Check if divisor is not zero to avoid division by zero error
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Cannot divide by zero";
    }
}

// Example usage:
const number1 = 10;
const number2 = 5;

// Perform operations
console.log("Addition:", add(number1, number2));
console.log("Subtraction:", subtract(number1, number2));
console.log("Multiplication:", multiply(number1, number2));
console.log("Division:", divide(number1, number2));
