const Engineer = require("../lib/Engineer");

test("checks if Engineer creates an object", () => {
    const engineer = new Engineer("Bruno");

    expect(engineer.name).toEqual("Bruno");
});