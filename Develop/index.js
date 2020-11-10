const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "What is the description of your project"
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
},
{
    type: "input",
    name: "usage",
    message: "What are the instructions for using your project?"
},
{
    type: "list",
    name: "license",
    message: "Select the license for your project.",
    choices: ["Apache", "Boost", "BSD", "Creative Commons"]
},
{
    type: "input",
    name: "contributing",
    message: "What are the contributing guidelines for your project?",
},
{
    type: "input",
    name: "tests",
    message: "Enter in your tests"
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub user name?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
}];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
    .then((answers) => {
        const markdown = generateMarkdown(answers);

        return writeFileAsync("README.md", markdown);
    })
    .then(function() {
        console.log("Successfully wrote README file");
    })
    .catch(err => {
        console.log(err);
    });