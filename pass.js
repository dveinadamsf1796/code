// Function to generate a random password
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    
    // Generate random characters until the password reaches the desired length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

// Define the desired length of the password
const passwordLength = 12;

// Generate a random password
const newPassword = generatePassword(passwordLength);

// Display the generated password
console.log("Generated Password:", newPassword);
