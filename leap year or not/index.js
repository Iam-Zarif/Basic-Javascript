
function leapYear(inputYear){
    
    if(inputYear %4 === 0){
        return "lip year";
    }
    else{
        return "Not lip year";
    }
}
console.log(leapYear(2025));