function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let allOver60 = numbers.filter(isOver60);
console.log(allOver60);
