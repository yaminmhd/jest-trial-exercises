const sumWithoutHighestAndLowest = array => {
  const sortedArray = array.sort((a, b) => a-b)
  const found = sortedArray.find((element, index) => (sortedArray.indexOf(element) != index));
  if(found){
    const newArray = sortedArray.filter((element, index) => (sortedArray.indexOf(element) == index));
    return newArray.slice(1, newArray.length-1).reduce((result, value) => result + value, 0);
  }

  return sortedArray.slice(1, sortedArray.length-1).reduce((result, value) => result + value, 0);
}

module.exports = sumWithoutHighestAndLowest;
