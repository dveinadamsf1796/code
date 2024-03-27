async function generateRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return `${data.content} - ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error.message);
        return 'Failed to fetch quote';
    }
}

// Example usage:
generateRandomQuote().then(quote => console.log(quote));
