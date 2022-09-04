// Exercise #3: Array of Orders

let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];
// Start coding here
console.log(Array.isArray(orders));
let isArray = orders;
//

let creditCardTypeOfBlindermann = orders[2].creditCardType;
orders[2].creditCardType = "Visa";
console.log(orders[2].creditCardType); // this one
console.log(creditCardTypeOfBlindermann); // and this one
console.log(orders[2]);
// Why the first two have different values though the variable has already been reassigned and therefore should contain a new value

let totalPurchaseOfJoannet = orders[3].productQuantity;
console.log(totalPurchaseOfJoannet);

//
let totalPurchaseOfDary = orders[1].productPrice * orders[1].productQuantity;
console.log("$" + " " + totalPurchaseOfDary);
console.log(`$ ${totalPurchaseOfDary}`);
//

orders.shift();
console.log(orders);