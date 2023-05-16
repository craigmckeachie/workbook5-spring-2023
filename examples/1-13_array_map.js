let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

function buildFullName(kid) {
  return kid.last + ", " + kid.last;
}
let namesList = kids.map(buildFullName);

for (const name of namesList) {
  console.log(name);
}
