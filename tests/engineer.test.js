const Engineer = require("../lib/Engineer");
const { test, expect } = require("@jest/globals");

test("Engineers GitHub", () => {
  const githubUser = "username";
  const newEngineer = new Engineer("name", 1, "email", githubUser);
  expect(newEngineer.github).toBe(githubUser);
});

test('Engineers role', () => {
  const engineerRole = 'Engineer';
  const newEngineer = new Engineer('name', 1, 'email', 'github');
  expect(newEngineer.getRole()).toBe(engineerRole);
});
