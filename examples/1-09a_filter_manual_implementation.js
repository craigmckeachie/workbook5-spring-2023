function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}

function filter(numbers, isOver60) {
  let filteredNumbers = [];
  for (const number of numbers) {
    if (isOver60(number)) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// function filter(array, conditionFn) {
//   let filteredArray = [];
//   for (const value of array) {
//     if (conditionFn(value)) {
//       filteredArray.push(value);
//     }
//   }
//   return filteredArray;
// }

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let allOver60 = filter(numbers, isOver60);
console.log(allOver60);
