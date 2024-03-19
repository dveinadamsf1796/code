// Function to reverse a string
function reverseString(str) {
    // Convert the string to an array, reverse it, and then join it back into a string
    return str.split('').reverse().join('');
}

// Test case
const inputString = "hello";
console.log("Reversed string:", reverseString(inputString));
