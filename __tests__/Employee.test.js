const Employee = require("../lib/Employee");

test("checks if new Employee creates an object", () => {
    const emp = new Employee("Ann", 1, "@email.com");

    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));

    expect(emp.getName()).toEqual("Ann");
    expect(emp.getId()).toEqual(1);
    expect(emp.getEmail()).toEqual("@email.com");
    expect(emp.getRole()).toEqual("Employee");
});