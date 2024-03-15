// Function to find the maximum element in an array
function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    let max = arr[0]; // Initialize max with the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }

    return max;
}

// Test cases
const arrays = [
    [3, 7, 2, 9, 1],
    [5, 8, 1, 4, 2],
    [-1, -5, -3, -2]
];

// Find and display the maximum element for each array
arrays.forEach((arr, index) => {
    console.log(`Maximum element in array ${index + 1}:`, findMax(arr));
});
