// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the screenshot."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "checkbox",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
      choices: ["Javascript", "C", "C++", "C#" ,"Ruby", "Swift", "Go (Golang)", "Rust", "Perl", "Java", "TypeScript", "Dart", "other"]
  },
  {
    type: "checkbox",
    name: "tests",
    message: "Provide a test if applicable.",
    choices: ["NPM", "Unit", "Integration", "End-to-End", "Functional", "Regression", "Performance", "Securtity", "Smoke", "Sanity", "Acceptance", "Load", "Stress", "Usability", "Compatibility", "Concurrency", "Other", "Non-Applicable"],
  }, 
  {
    type: "input",
    name: "require",
    message: "Please list any other language that was included."
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "", 
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the application
function init() {
    inquirer.prompt(questions).then((responses) => {
        // Any setup code or initialization tasks can go here
        console.log("Initializing the application...");
        const readmeData = generateMarkdown({ ...responses });
        const fileName = "README.md";
        writeFile(fileName, readmeData);
   });
}

// Function call to initialize app
init();
