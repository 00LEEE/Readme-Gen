// TODO: Include packages needed for this application
// npm install inquirer
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is the project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of the project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install the project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use the project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license:',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the guidelines for contributing to the project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions for the project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
