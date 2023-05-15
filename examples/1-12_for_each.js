let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

//generic name for array value is arrayElement
// function displayKid(arrayElement) {
//   console.log(arrayElement.first + " " + arrayElement.last);
// }

function displayKid(kid) {
  console.log(kid.first + " " + kid.last);
}

kids.forEach(displayKid);

function displayNumberedKid(kid, index) {
  let number = index + 1;
  console.log(number, kid.first, kid.last);
}

kids.forEach(displayNumberedKid);
