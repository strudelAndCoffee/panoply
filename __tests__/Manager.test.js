const Manager = require("../lib/Manager");

test("checks if Manager creates an object", () => {
    const manager = new Manager("Diana", 2, "@email.com", 42);

    expect(manager.name).toEqual("Diana");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
    
    expect(manager.getRole()).toEqual("Manager");
});