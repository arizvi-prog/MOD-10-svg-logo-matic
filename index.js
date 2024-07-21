const inquirer = require('inquirer');
const generateLogo = require('./lib/logoGenerator');

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: input => input.length <= 3 || 'Text must be up to three characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):',
        },
    ]);

    generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
}

promptUser();
