import { it, expect } from "vitest";
import { add } from "./math";

it("should summarise all number values in an array", () => {
  //Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid nnumber is provided", () => {
  //Arrange
  const inputs = ["invalid", 1];

  //Act
  const result = add(inputs);

  //Assert
  expect(result).toBeNaN();
});

it("Should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});
