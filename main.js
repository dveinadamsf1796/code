// GitHub API Library
const { Octokit } = require('@octokit/rest');
const fetch = require('node-fetch');

// Insert your GitHub tokens here in next format ['token1', 'token2', 'token3']
const gitTokens = ['token1', 
                   'token2',
                   'token3',
                   'token4',
                   'token5'];

// Insert your GitHub names here in next format ['name1', 'name2', 'name3']
const gitNames = ['name1',
                  'name2',
                  'name3',
                  'name4',
                  'name5'];

// Function to generate unique name for the file
function generateUniqueName() {
    return `fact_${Math.floor(Math.random() * 150000000)}.txt`;
}

// Function to push random dog fact to the GitHub repo
async function pushRandomDogFact(repoOwner, token) {
    // API initialization
    const octokit = new Octokit({ auth: token });

    try {
        // Get all files from the repo
        const branchFilesData = await octokit.rest.repos.getContent({
            owner: repoOwner,
            repo: 'randomDogFacts',
            branch: 'main',
        });

        // Fetch random dog fact from the API
        const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
        const { message: imageUrl } = await dogResponse.json();

        // Generate unique name for the file
        let randomName = generateUniqueName();

        // Check if file name is unique in the repo
        const isAlreadyFileNameExist = !!branchFilesData.data.find((file) => {
            return file.path === randomName;
        });

        // If file name is not unique, generate new name
        if (isAlreadyFileNameExist) {
            pushRandomDogFact(repoOwner, token);
        }

        // Push file (image URL) to the repo
        await octokit.rest.repos.createOrUpdateFileContents({
            owner: repoOwner,
            repo: 'randomDogFacts',
            path: randomName,
            message: 'Another great day with a great dog fact',
            content: Buffer.from(imageUrl).toString('base64'),
            branch: 'main',
        });
        console.log('Pushed fact to randomDogFacts');
    } catch (error) {
        console.error('Error pushing fact to randomDogFacts', error);
    }
}

// Function to start execution
function startExecution() {
    gitTokens.forEach((token, index) => {
        pushRandomDogFact(gitNames[index], token);
    });
}

// Start execution
startExecution();
