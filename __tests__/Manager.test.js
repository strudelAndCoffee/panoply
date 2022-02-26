const Manager = require("../lib/Manager");

test("checks if object of class Manager is created", () => {
    const manager = new Manager("Diana", 2, "@email.com", 42);

    expect(manager.name).toEqual("Diana");
    expect(manager.id).toEqual(2);
    expect(manager.email).toEqual("@email.com");
    expect(manager.officeNumber).toEqual(42);
    
    expect(manager.getRole()).toEqual("Manager");
});