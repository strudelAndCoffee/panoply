const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function generateProfiles(data) {

    const fullTeamMembers = [];

    const { mgrName, mgrId, mgrEmail, mgrOfficeNo } = data;
    const teamArr = data.team;

    const mgrObj = new Manager(mgrName, mgrId, mgrEmail, mgrOfficeNo);
    fullTeamMembers.push(mgrObj);

    for (let i = 0; i < teamArr.length; i++) {

        let role = teamArr[i].teamMember;
        let name = teamArr[i].
    }

    return fullTeamMembers;
};

module.exports = generateProfiles;