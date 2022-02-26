const Intern = require("../lib/Intern");

test("checks if object of class Intern is created", () => {
    const intern = new Intern("Carlos", 4, "@email.com", "school");

    expect(intern.name).toEqual("Carlos");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    
    expect(intern.getSchool()).toEqual("school");
    expect(intern.getRole()).toEqual("Intern");
});