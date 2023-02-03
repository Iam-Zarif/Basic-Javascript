
let mobiles = [
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
totalPrize = 0;
for (let i=0; i<mobiles.length; i++){
totalPrize += mobiles[i].price;

}
console.log(totalPrize);

