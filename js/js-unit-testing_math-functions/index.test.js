import { add, subtract, multiply, divide } from "./index.js";

test("adds the number 2,3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("returns a negative value if the greater arguement is negative", () => {
  const result = add(-4, 3);
  expect(result).toBeLessThan(0);
});
test("returns 10 by substracting 15-5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("eturns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(15, 25);
  expect(result).toBeLessThan(0);
});
test("returns 8 if called with multiply", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 3);
  expect(result).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -3);
  expect(result).toBeLessThan(0);
});
test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -3);
  expect(result).toBeGreaterThan(0);
});
test("returns 3 if called with divide", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test('returns "You should not do this!" if called with 0 as the second argument', () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
