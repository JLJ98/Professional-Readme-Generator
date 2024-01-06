// Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from 'fs';

// Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
    },
    {
        type: 'input',
        name: 'whyBuild',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problemSolve',
        message: 'What problem does this project solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn from this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
    type: 'input',
    name: 'links',
    message: 'Provide links to your deployed project and GitHub repository:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, third-party assets, or tutorials followed:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your project:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your application:',
    },
];


// Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadmeContent(answers); // Pass answers to generateReadmeContent
        writeToFile('README.md', readmeContent);
    });
}

// Additional helper function to generate the README content
function generateReadmeContent(answers) {
    // Use answers to generate and return the README content
    return `# ${answers.title}

## Description
${answers.description}

Motivation:
${answers.motivation}

Why I built this project:
${answers.whyBuild}

Problem it solves:
${answers.problemSolve}

What I learned:
${answers.learn}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

... // Other sections like Features, How to Contribute, Tests, etc.
`;
}

// Function call to initialize app
init();
