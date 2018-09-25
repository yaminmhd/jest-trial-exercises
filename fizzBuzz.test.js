const fizzBuzz = require('./fizzBuzz');

test('it should return 1 for input 1', () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test('it should return Fizz for input 3', () => {
  expect(fizzBuzz(3)).toEqual('Fizz')
});