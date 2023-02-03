
function carts(cartName){
    let sum = 0;
    console.log("The list is given ");
    console.log(cartName);
for(let i=0; i<cartName.length; i++){
    sum += cartName[i].Prize;
    
}
console.log("\n\nTotal amount of paysa is ",sum);
}
let itemNames = [
    {brand:"LG", Prize : 12000},
    {brand:"Samsung", Prize : 12500},
    {brand:"Oppo", Prize : 10000},
    {brand:"Vivo", Prize : 11000}

];
carts(itemNames);