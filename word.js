// Function to find the longest word in a sentence
function findLongestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    let longestWord = '';

    // Iterate through each word to find the longest one
    for (let word of words) {
        // Remove any non-alphanumeric characters to consider only the actual word
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
        if (cleanedWord.length > longestWord.length) {
            longestWord = cleanedWord;
        }
    }

    return longestWord;
}

// Test case
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Longest word in the sentence:", findLongestWord(sentence));
