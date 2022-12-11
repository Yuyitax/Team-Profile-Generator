const Intern = require("../lib/Intern")
const { test, expect } = require("@jest/globals");


test('Interns role', () => {
    const internRole = 'Intern';
    const newIntern = new Intern('name', 1, 'email', 'school');
    expect(newIntern.getRole()).toBe(internRole);
});
