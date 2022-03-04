const inquirer = require("inquirer");

// questions for team member profiles, prompts for Engineer or Intern depending on intial prompt
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
            name: "role",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?",
            validate: input => {
                if (!input) {
                    return "please enter a name...";
                }
                return true;
            },
            when: ({ role }) => {
                if (role == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?",
            validate: input => {
                if (!input) {
                    return "please enter a name...";
                }
                return true;
            },
            when: ({ role }) => {
                if (role == "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's employee ID?",
            validate: input => {
                if (isNaN(input) || !input) {
                    return "please enter a number...";
                }
                return true;
            },
            when: ({ role }) => {
                if (role == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's employee ID?",
            validate: input => {
                if (isNaN(input) || !input) {
                    return "please enter a number...";
                }
                return true;
            },
            when: ({ role }) => {
                if (role == "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's eamil?",
            validate: input => {
                if (input.includes("@") && input.includes(".")) {
                    return true;
                } else {
                    return "please enter a valid email address...";
                }
            },
            when: ({ role }) => {
                if (role == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's eamil?",
            validate: input => {
                if (input.includes("@") && input.includes(".")) {
                    return true;
                } else {
                    return "please enter a valid email address...";
                }
            },
            when: ({ role }) => {
                if (role == "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?",
            validate: input => {
                if (!input) {
                    return "please enter a GitHub username";
                }
                return true;
            },
            when: ({ role }) => {
                if (role == "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?",
            validate: input => {
                if (!input) {
                    return "please enter a school name";
                }
                return true;
            },
            when: ({ role }) => {
                if (role == "Intern") {
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

module.exports = addTeamMembers;