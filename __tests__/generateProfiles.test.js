const generateProfiles = require("../lib/generateProfiles");

test("checks if generateProfile.js returns array of object classes", () => {
    const fullTeamObj = {
        mgrName: "Ann",
        mgrId: 1,
        mgrEmail: "ann@email.com",
        mgrOfficeNo: 42,
        team: [
            {
                role: "Engineer",
                name: "Bob",
                id: 2,
                email: "bob@email.com",
                github: "bobbybob"
            },
            {
                role: "Intern",
                name: "Chad",
                id: 3,
                email: "chad@email.com",
                school: "UT"
            }
        ]
    };
    const mgrOnlyObj = {
        mgrName: "Doug",
        mgrId: 1,
        mgrEmail: "doug@email.com",
        mgrOfficeNo: 123
    };
    const fullTeamArr = generateProfiles(fullTeamObj);
    const mgrOnlyArr = generateProfiles(mgrOnlyObj);

    expect(fullTeamArr).toEqual(expect.any(Array));
    expect(fullTeamArr[0].name).toBe("Ann");
    expect(fullTeamArr[0].officeNumber).toBe(42);
    expect(fullTeamArr[1].id).toBe(2);
    expect(fullTeamArr[1].github).toBe("bobbybob");
    expect(fullTeamArr[1].school).toBeUndefined();
    expect(fullTeamArr[2].email).toBe("chad@email.com");
    expect(fullTeamArr[2].school).toBe("UT");
    expect(fullTeamArr[2].github).toBeUndefined();

    expect(mgrOnlyArr[1]).toBeUndefined();
    expect(mgrOnlyArr[0].name).toBe("Doug");
    expect(mgrOnlyArr[0].officeNumber).toBe(123);
    expect(mgrOnlyArr[0].github).toBeUndefined();
});