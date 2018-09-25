const sumOfTwoNumbers = require('./sumOfTwoNumbers');

test('it should return 0', () => {
  expect(sumOfTwoNumbers()).toEqual(0);
});

test('it should add the two arguments and return the sum', () => {
  expect(sumOfTwoNumbers(2,3)).toEqual(5);
});


test('it should add the two arguments and return the sum', () => {
  expect(sumOfTwoNumbers(5,9)).toEqual(14);
});

test('it should be null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});