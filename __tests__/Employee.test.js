const Employee = require("../lib/Employee");

test("New Employee created", ()=> {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Set Employee Name", () => {
    const name = "Joseph";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Set ID", () => {
    const testValue = 100;
    const emp = new Employee("Jose", testValue);
    expect(emp.id).toBe(testValue);
});

test("Set Email", () => {
    const testValue = "test@valormm.com";
    const emp = new Employee("Jose", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name", () => {
    const testValue = "Joseph";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID", () => {
    const testValue = 61;
    const emp = new Employee("Jose", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email", () => {
    const testValue = "test@valormm.com";
    const emp = new Employee("Jose", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("Get Role", () => {
    const testValue = "Employee";
    const emp = new Employee("Joseph", 1, "test@valormm.com");
    expect(emp.getRole()).toBe(testValue);
});