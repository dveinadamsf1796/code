// Define an array of quiz questions
const quiz = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    }
];

// Function to start the quiz
function startQuiz() {
    let score = 0;
    // Loop through each question in the quiz
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i].question;
        const options = quiz[i].options;
        const correctAnswer = quiz[i].correctAnswer;

        // Display the question
        console.log(`Question ${i + 1}: ${question}`);
        
        // Display the options
        for (let j = 0; j < options.length; j++) {
            console.log(`${j + 1}. ${options[j]}`);
        }

        // Prompt user for answer
        const userAnswer = prompt("Enter the number of your answer:");

        // Check if the answer is correct
        if (userAnswer !== null && userAnswer !== "" && options[userAnswer - 1] === correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Incorrect! The correct answer is:", correctAnswer);
        }
    }
    // Display final score
    console.log("Quiz completed! Your score:", score, "out of", quiz.length);
}

// Start the quiz
startQuiz();
