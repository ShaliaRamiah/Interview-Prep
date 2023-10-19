// Min should return the smallest number or 0 if the sequence contains no elements in an array.

function min(arr) {
    if (arr.length == 0) {
      return 0;
    } else {
      return Math.min(...arr);
    }
  }
  
let numbers = [5, 2, 8, 1, 4];
let result = min(numbers);
console.log(result); // Output: 1

let emptyArray = [];
result = min(emptyArray);
console.log(result); // Output: 0