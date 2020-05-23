const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set Office Number via constructor argument", () => {
    const testValue = 61;
    const emp = new Manager("Jose", 1, "test@valormm.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Manager";
    const emp = new Manager("Jose", 1, "test@valormm.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
    const testValue = 61;
    const emp = new Manager("Jose", 1, "test@valormm.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});