
function avgOfArray(inputedNumber){
    let sum = 0;
    for (let i = 0; i < inputedNumber.length; i++) {
      sum += inputedNumber[i];
    }
    console.log("Total is ", sum);
    if (sum / inputedNumber.length % 1 === 0){
      console.log("Avarage is ", sum / inputedNumber.length);
    }
    else{
      console.log("Avarage is ", (sum / inputedNumber.length).toFixed(2));
    }

 }

let Nums =[10, 12, 14, 18, 10,20];
avgOfArray(Nums);

