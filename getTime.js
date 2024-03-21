// Function to generate a unique identifier
function generateUniqueId() {
    const timestamp = new Date().getTime(); // Current timestamp
    const randomNumber = Math.floor(Math.random() * 1000000); // Random number between 0 and 999999
    return `${timestamp}-${randomNumber}`;
}

// Generate a unique identifier
const uniqueId = generateUniqueId();
console.log("Unique Identifier:", uniqueId);
