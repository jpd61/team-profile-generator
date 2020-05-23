const Engineer = require("../lib/Engineer");

test("Set GitHub Account", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Jose", 1, "test@valormm.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("Get Role", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Jose", 1, "test@valormm.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Jose", 1, "test@valormm.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});