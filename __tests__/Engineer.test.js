const Engineer = require("../lib/Engineer");

test("checks if object of class Engineer is created", () => {
    const engineer = new Engineer("Bruno", 3, "@email.com", "github");

    expect(engineer.name).toEqual("Bruno");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    
    expect(engineer.getGithub()).toEqual("github");
    expect(engineer.getRole()).toEqual("Engineer");
});