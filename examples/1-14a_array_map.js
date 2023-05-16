//forof
// let numbers = [1, 2, 3, 4, 5];
// let tens = [];

// for (const number of numbers) {
//   tens.push(number * 10);
// }

// console.log(tens);

//map
let numbers = [1, 2, 3, 4, 5];
let tens = numbers.map(function transform(number) {
  return number * 1000;
});

console.log(tens);
