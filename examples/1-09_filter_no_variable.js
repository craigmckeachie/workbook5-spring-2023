function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let allNumbersOver60InAnArray = numbers.filter(isOver60);
console.log(allNumbersOver60InAnArray);

numbers.filter(isOver60).forEach(number => console.log(number));

function filter(fn) {
  return [];
}

function find(fn) {
  return {first: 'Craig'};
}

const person = find(()=>{});
console.log(person.first);
//OR
console.log(find(() => {}).first);

