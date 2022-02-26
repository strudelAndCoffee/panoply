const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const generateProfiles = data => {

    // array of manager and team member objects
    const fullTeamMembers = [];

    // creates manager object from Manager class
    const { mgrName, mgrId, mgrEmail, mgrOfficeNo } = data;
    const mgrObj = new Manager(mgrName, mgrId, mgrEmail, mgrOfficeNo);
    fullTeamMembers.push(mgrObj);

    // creates team member objects from Engineer/Intern classes
    if (data.team) {
        
        const teamArr = data.team;

        for (let i = 0; i < teamArr.length; i++) {
            let role = teamArr[i].role;
            let name = teamArr[i].name;
            let id = teamArr[i].id;
            let email = teamArr[i].email;

            // determines which class to create
            if (role == "Engineer") {
                let github = teamArr[i].github;
                let tmObj = new Engineer(name, id, email, github);
                fullTeamMembers.push(tmObj);
            }
            else if (role == "Intern") {
                let school = teamArr[i].school;
                let tmObj = new Intern(name, id, email, school);
                fullTeamMembers.push(tmObj);
            }
        }
    };

    return fullTeamMembers;
};

module.exports = generateProfiles;