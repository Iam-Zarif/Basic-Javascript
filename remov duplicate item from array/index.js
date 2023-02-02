function arrays(names){
    let duplicateremove = [];
for(let i=0; i< names.length; i++){
    console.log(names[i]);
    
    if(duplicateremove.includes(names[i]) === false){
        duplicateremove.push(names[i]);
    }

}
return duplicateremove;
}
let theNames = ['Zarif', 'Ali', 'Amena', 'Amena'];

let uniqnames =  arrays(theNames);
console.log(uniqnames);