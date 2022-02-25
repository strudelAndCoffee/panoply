const Employee = require("../lib/Employee");

test("checks if Employee creates an object", () => {
    const employee = new Employee("Adam", "Intern");

    expect(employee.name).toEqual("Adam");
    expect(employee.role).toEqual("Intern");
});