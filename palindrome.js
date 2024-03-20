// Function to check if a string is a valid palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare the string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test cases
const strings = [
    "A man, a plan, a canal, Panama!",
    "racecar",
    "hello",
    "Madam, in Eden, I'm Adam"
];

// Check if each string is a palindrome and display the result
strings.forEach(str => {
    console.log(`Is "${str}" a palindrome?`, isPalindrome(str));
});
