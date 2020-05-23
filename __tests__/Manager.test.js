const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set Office Number", () => {
    const testValue = 61;
    const emp = new Manager("Jose", 1, "test@valormm.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("Get Role", () => {
    const testValue = "Manager";
    const emp = new Manager("Jose", 1, "test@valormm.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number", () => {
    const testValue = 61;
    const emp = new Manager("Jose", 1, "test@valormm.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});