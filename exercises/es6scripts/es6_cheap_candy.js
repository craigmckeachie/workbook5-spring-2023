let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Reeses Peanut Butter Cups", price: 5.38 },
  { product: "Krackle", price: 4.12 },
  { product: "Starbursts", price: 2.52 },
  { product: "Skittles", price: 7.79 },
  { product: "Reeses Pieces", price: 3.23 },
  { product: "Three Musketeers", price: 4.89 },
];

console.log("===========Products sorted by price==============");
products.sort((a, b) => a.price - b.price);
console.log(products);

console.log("===========Which candies costs less than $4.00?==============");
let cheapProducts = products.filter((p) => p.price < 4);
console.log(cheapProducts);

console.log(
  "============ Which candies have 'M&M' in its name?==============="
);
let mmProducts = products.filter((p) => p.product.includes("M&M"));
console.log(mmProducts);

console.log("=========Do we carry 'Swedish Fish'?==========");
let swedishFish = products.find((p) => p.product == "Swedish Fish");
const answer = swedishFish ? "Yes" : "No";
console.log(answer);
