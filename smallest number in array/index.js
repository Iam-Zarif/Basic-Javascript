
let names = [17, 12, 15, 51 ,20];
let smallest = names[0];
console.log("The numbers are ");
for (let i = 0; i<names.length ; i++){
  console.log(names[i]);
  if(names[i]<smallest){
    smallest = names[i];
  }
}
console.log("The smallest is ",smallest);