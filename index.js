const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function generateProfiles(data) {
    const { name, id, email, officeNumber } = data;
    const manager = new Manager(name, id, email, officeNumber);

    generateHtml(manager);
};

function generateHtml(profiles) {
    console.log(profiles);
};

function managerInit() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a name");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee id?",
            validate: input => {
                if (isNaN(input) || !input) {
                    console.log("Please enter a number");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
            validate: input => {
                if (input.includes("@") && input.includes(".")) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is their office number?",
            validate: input => {
                if (isNaN(input) || !input) {
                    console.log("Please enter a number");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]);
};

managerInit()
.then(generateProfiles);