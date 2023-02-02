function smallNumber(Num1,Num2,Num3){
if(Num1 < Num2 && Num1 < Num3){
    return "Your first input is smaller";
}
else if(Num2 < Num1 && Num2 < Num3){
    return "Your second input is smaller";
}
else{
    return "Your third input is smaller";
}
}
console.log(smallNumber(20, 19, 12));