const Manager = require("../lib/Manager");

test("checks if Manager creates an object", () => {
    const manager = new Manager("Diana");

    expect(manager.name).toEqual("Diana");
});