// Function to count the occurrences of each word in a sentence
function countWordFrequency(sentence) {
    // Convert the sentence to lowercase and split it into an array of words
    const words = sentence.toLowerCase().split(/\s+/);
    
    // Create an empty object to store word frequencies
    const frequency = {};
    
    // Iterate over the words array and count the occurrences of each word
    words.forEach(word => {
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    });
    
    return frequency;
}

// Input sentence
const inputSentence = "The quick brown fox jumps over the lazy dog";

// Count word frequency in the input sentence
const wordFrequency = countWordFrequency(inputSentence);

// Display the word frequency
console.log("Word Frequency:");
for (const word in wordFrequency) {
    console.log(`${word}: ${wordFrequency[word]}`);
}
