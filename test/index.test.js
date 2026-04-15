const {
  generateStrongPassword,
  isStrongPassword
} = require("../src/index");


describe("password-utilities", () => {
  test("generateStrongPassword returns a string of requested length", () => {
    const password = generateStrongPassword(12);
    expect(typeof password).toBe("string");
    expect(password).toHaveLength(12);
  });


  test('isStrongPassword returns false for "Hello World"', () => {
    expect(isStrongPassword("Hello World")).toBe(false);
  });


  test('isStrongPassword returns true for "pC%mD8TpCKn2"', () => {
    expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
  });
});

