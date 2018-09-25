
const firstNonConsecutiveNumber = arrayInput => {
  for (let i = 0; i < arrayInput.length-1; i++) {
    if(arrayInput[i] + 1 !== arrayInput[i+1]){
      return arrayInput[i+1];
    }
  }
  return null;
}



module.exports = firstNonConsecutiveNumber;