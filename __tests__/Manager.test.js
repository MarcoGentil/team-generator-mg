const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "2002";
    const employee = new Manager("Marco", 12, "matotonio12@hotmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Marco", 12, "matotonio12@hotmail.com", "MarcoGentil");
    expect(employee.getRole()).toBe(role);
  });