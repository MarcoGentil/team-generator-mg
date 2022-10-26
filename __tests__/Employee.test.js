const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "Marco Gentile";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "12";
    const employee = new Employee("Marco Gentile", id, "matotonio12@hotmail.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "matotonio12@hotmail.com";
    const employee = new Employee("Marco Gentile", 12, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Marco Gentile", 12, "matotonio12@hotmail.com");
    expect(employee.getRole()).toBe(role);
  });