// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = require('./sumWithoutHighestAndLowest');

test('it should sum without highest and lowest in an array', () => {
  expect(sumWithoutHighestAndLowest([6,2,1,8,10])).toEqual(16);
});

test('it should sum without highest and lowest in an array', () => {
  expect(sumWithoutHighestAndLowest([1,1,11,2,3])).toEqual(5);
});