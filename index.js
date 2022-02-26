const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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

const addTeamMembers = data => {

    if (!data.confirmAddTeam) {
        return data;
    }

    let teamMembers = data;
    if (!teamMembers.team) {
        teamMembers.team = [];
    };

    return inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "engName",
            message: "What is your engineer's name?",
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
            message: "What is your intern's name?",
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
            message: "What is your engineer's employee ID?",
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
            message: "What is your intern's employee ID?",
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
            message: "What is your engineer's eamil?",
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
            message: "What is your intern's eamil?",
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
        },
        {
            type: "input",
            name: "engGithub",
            message: "What is your engineer's GitHub username?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a GitHub username");
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
            name: "intSchool",
            message: "What is your intern's school?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a school name");
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
            type: "confirm",
            name: "confirmAdd",
            message: "Would you like to add additional team members?",
            default: true
        },
    ]).then(tmData => {
        teamMembers.team.push(tmData);
        if (tmData.confirmAdd) {
            return addTeamMembers(teamMembers);
        } else {
            return teamMembers;
        }
    })
};

// const generateProfiles = data => {
//     const { } = data;
//     const manager = new Manager(name, id, email, officeNumber);

//     generateHtml(manager);
// };

// const generateHtml = profiles => {
//     console.log(profiles);
// };

promptManagerData()
.then(addTeamMembers)
.then(response => {
    console.log(response);
});