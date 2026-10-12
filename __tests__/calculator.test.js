import { divide } from "../src/calculator.js";

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("throws an error when the first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(
      "Both arguments must be numbers"
    );
  });

  it("throws an error when the second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(
      "Both arguments must be numbers"
    );
  });

  it("throws an error when an argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(
      "Arguments cannot be NaN"
    );
  });

  it("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(
      "Division by zero is not allowed"
    );
  });
});
