//defining the function, creating the function
function myFunction(parameter1, parameter2, parameter3) {
  console.log("paramter1: " + parameter1);
  console.log("paramter2: " + parameter2);
  console.log("paramter3: " + parameter3);
}

//arrow function
const myFunction = (parameter1, parameter2, parameter3) => {
  console.log("paramter1: " + parameter1);
  console.log("paramter2: " + parameter2);
  console.log("paramter3: " + parameter3);
};

const argument1 = 1;
const argument2 = "two";
const argument3 = { name: "three", id: 3 };

//calling (invoking) the function and catching the return value
const returnValueCaught = myFunction(
  argument1,
  argument2,
  argument3,
  argument4
);
