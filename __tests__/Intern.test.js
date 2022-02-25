const Intern = require("../lib/Intern");

test("checks if Intern creates an object", () => {
    const intern = new Intern("Carlos");

    expect(intern.name).toEqual("Carlos");
});