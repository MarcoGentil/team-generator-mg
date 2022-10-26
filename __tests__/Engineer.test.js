const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "MarcoGentil";
    const employee = new Engineer("Marco", 12, "matotonio12@hotmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Marco", 12, "matotonio12@hotmail.com", "MarcoGentil");
    expect(employee.getRole()).toBe(role);
  });