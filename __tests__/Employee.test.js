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

