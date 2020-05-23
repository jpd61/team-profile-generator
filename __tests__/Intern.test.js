const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "Baylor";
    const emp = new Intern("Jose", 1, "test@valormm.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("Joseph", 1, "test@valormm.com", "Baylor");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "Baylor";
    const emp = new Intern("Jose", 1, "test@valormm.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});