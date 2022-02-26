const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptManager = () => {
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
            message: "What is your team manager's ID number?",
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
        }
    ])
};

const addTeamMembers = info => {
    if (!info.teamMembers) {
        info.teamMembers = [];
    };

    return inquirer.prompt([
        {
            type: "confirm",
            name: "addTeamMember",
            message: "Would you like to include additional team members?",
            default: true
        },
        {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern"],
            when: ({ addTeamMember }) => {
                if (addTeamMember) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engName",
            message: "What is the engineer's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a name");
                    return false;
                }
            },
            when: ({ teamMember }) => {
                if (teamMember == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "intName",
            message: "What is the intern's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a name");
                    return false;
                }
            },
            when: ({ teamMember }) => {
                if (teamMember == "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engId",
            message: "What is the engineer's ID number?",
            validate: input => {
                if (isNaN(input) || !input) {
                    console.log("Please enter a number");
                    return false;
                } else {
                    return true;
                }
            },
            when: ({ teamMember }) => {
                if (teamMember == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "intId",
            message: "What is the intern's ID number?",
            validate: input => {
                if (isNaN(input) || !input) {
                    console.log("Please enter a number");
                    return false;
                } else {
                    return true;
                }
            },
            when: ({ teamMember }) => {
                if (teamMember == "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engEmail",
            message: "What is the engineer's eamil?",
            validate: input => {
                if (input.includes("@") && input.includes(".")) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false;
                }
            },
            when: ({ teamMember }) => {
                if (teamMember == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "intEmail",
            message: "What is the intern's eamil?",
            validate: input => {
                if (input.includes("@") && input.includes(".")) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false;
                }
            },
            when: ({ teamMember }) => {
                if (teamMember == "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

// const generateProfiles = data => {
//     const { } = data;
//     const manager = new Manager(name, id, email, officeNumber);

//     generateHtml(manager);
// };

// const generateHtml = profiles => {
//     console.log(profiles);
// };

promptManager()
.then(addTeamMembers);