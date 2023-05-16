let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

function buildFullName(kid) {
  return kid.last + ", " + kid.first;
}

function displayName(kid) {
  console.log(kid);
}

let namesList = kids.map(buildFullName);

namesList.forEach(displayName);
// for (const name of namesList) {
//   console.log(name);
// }
