const Engineer = require("../lib/Engineer")

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });