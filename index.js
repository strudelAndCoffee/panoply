const inquirer = require("inquirer");
const addTeamMembers = require("./utils/addTeamMembers");
const generateProfiles = require("./lib/generateProfiles");
const pageLayout = require("./utils/generateHtml"); 
const { writeFile, copyFile } = require("./utils/generateFiles");

// questions for manager profile
const promptManagerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "mgrName",
            message: "What is your team manager's name?",
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
            name: "mgrId",
            message: "What is your team manager's employee ID?",
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
            name: "mgrEmail",
            message: "What is your team manager's email?",
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
            name: "mgrOfficeNo",
            message: "What is your team manager's office number?",
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
            type: "confirm",
            name: "confirmAddTeam",
            message: "Would you like to add team members?",
            default: true
        }
    ])
};

// initiates program
promptManagerData()
.then(addTeamMembers)
.then(generateProfiles)
.then(profileObjs => {
    return pageLayout(profileObjs);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(response => {
    console.log("---------------");
    console.log(response.message);
    return copyFile();
})
.then(response => {
    console.log(response.message);
    console.log("---------------");
    console.log("Action complete! Check 'dist' folder.");
})
.catch(err => {
    console.error(err);
});