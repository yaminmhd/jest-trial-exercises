const fizzBuzz = require("./fizzBuzz");

test("it should return 1 for input 1", () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test("it should return Fizz for input divisible by 3", () => {
  expect(fizzBuzz(3)).toEqual("Fizz");
});

test("it should return Fizz for input divisible by 3", () => {
  expect(fizzBuzz(6)).toEqual("Fizz");
});

test("it should return Buzz for input divisible 5", () => {
  expect(fizzBuzz(5)).toEqual("Buzz");
});

test("it should return Buzz for input divisible 5", () => {
  expect(fizzBuzz(10)).toEqual("Buzz");
});

test("it should return FizzBuzz for input divisible by 15", () => {
  expect(fizzBuzz(15)).toEqual("FizzBuzz");
});
