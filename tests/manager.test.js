const Manager = require("../lib/Manager");
const { test, expect } = require("@jest/globals");


test('Managers role', () => {
    const managerRole = 'Manager';
    const newManager = new Manager('name', 1, 'email', 'officeNumber');
    expect(newManager.getRole()).toBe(managerRole);
});
