// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'provide a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'what are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'provide instructions for use.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'how can other developers contribute?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'write tests for your application here.',
        name: 'tests'

    },
    {
        type: 'checkbox',
        message: 'choose a license.',
        choices: [
            'None',
            'Apache',
            'Apache 2',
            'MIT',
            'GPL',
            'BSD'
         ],
         name: 'license'
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email'
    }
])


.then((data) => {
// TODO: Create a function to write README file
   const readmeData = generateMarkdown(data);
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, null, (err) =>
        err ? console.error(err) : console.log("Your ReadMe has been generated"))
    }
    writeToFile("README.md", readmeData);
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
