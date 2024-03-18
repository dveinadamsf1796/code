// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test case
const text = "hello world";
console.log("Reversed string:", reverseString(text));
