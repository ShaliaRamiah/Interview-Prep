//Return true if 'i' is even AND 'j' is odd OR if the sum of both parameters is equal to 6, 
//otherwise return false 

function checkConditions(i, j) {
    if ((i % 2 == 0) && (j % 2 !== 0) || (i + j == 6)) {
      return true;
    } else {
      return false;
    }
  }

let i = 4;
let j = 3;

let result = checkConditions(i, j);

console.log(result); 