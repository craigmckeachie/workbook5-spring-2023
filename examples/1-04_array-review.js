let statesInfo = [
  {
    state: "California",
    cities: [
      "San Diego",
      "San Francisco",
      "Santa Barbara",
      "Monterey",
      "Redwood City",
    ],
  },
  {
    state: "Maryland",
    cities: [
      "Leonardtown",
      "St Leonard",
      "St Mary's City",
      "Annapolis",
      "Ocean City",
    ],
  },
  {
    state: "Texas",
    cities: [
      "San Antonio",
      "Austin",
      "Pflugerville",
      "Dallas",
      "Ft Worth",
      "Paris",
      "Athens",
    ],
  },
];


function displayStates(states) {
  for (const stateInfo of states) {
    console.log(stateInfo.state);
    console.log("==============");
    displayCities(stateInfo.cities);
    console.log();
  }
}

function displayCities(cities) {
  for (const city of cities) {
    console.log(city);
  }
}

displayStates(statesInfo);
