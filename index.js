const fs = require('fs');
const inquirer = require('inquirer');

let questions = [
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

    }
]

