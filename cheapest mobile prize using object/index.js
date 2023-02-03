

function cheapMobile(theArray){
let cheapest = theArray[0];
console.log("Given the details of products ");

for(let i=0 ; i< theArray.length ; i++){
    console.log(theArray[i]);
    if (theArray[i].price < cheapest.price) {
      cheapest = theArray[i];
    }
}
console.log("\nCheapest is ",cheapest);
}

let names = [
  {
    brand: "LG",
    price: 12000,
    color: "white",
  },

  {
    brand: "Samsung",
    price: 11500,
    color: "Brown",
  },

  {
    brand: "Infinix",
    price: 12500,
    color: "Red"
  }
];

let totalPrize = cheapMobile(names);



