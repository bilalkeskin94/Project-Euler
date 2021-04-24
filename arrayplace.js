//Given an array of integers,replace all occurences of elemToReplace with substition elemToReplace

const arrayReplace = (array, elemToReplace, subElem) => {
  for (let i of array) {
    if (array[i] === elemToReplace) {
      array[i] = subElem;
    }
  }
  return array;
};
console.log(arrayReplace([2, 1, 3], 1, 3));
