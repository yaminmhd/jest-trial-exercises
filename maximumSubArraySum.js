// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// const maxSequence = arr => {
//   const maximum = arr.reduce((previousLargestNumber, currentLargestNumber) => {
//     return currentLargestNumber > previousLargestNumber
//       ? currentLargestNumber
//       : previousLargestNumber;
//   }, 0);

//   const maxIndex = arr.indexOf(maximum);
//   const endIndex = maxIndex + maximum
//   const subArray = arr.slice(maxIndex, endIndex);

//   return subArray.reduce((acc,value => acc+= value), 0)

// };

const maxSequence = array => {
  let maxSoFar = 0;
  let currentMax = 0;

  for (let i = 0; i < array.length; i++) {
    currentMax = Math.max(array[i], array[i]+currentMax);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
