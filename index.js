// Code your solution in this file.
function lowerCaseDrivers(array){
  let newarray = [];
  
  for (let element of array){
    newarray.push(element.toLowerCase());
  }
  return newarray;
}

function nameToAttributes(drivers){
let arrObj =[];
for (let x of drivers ){
var fname = x.split(" ")[0];
var lname = x.split(" ")[1];

  arrObj.push({firstName: fname,lastName: lname });
}
  return  arrObj;
}

attributesToPhrase(drivers){}

