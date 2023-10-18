
function palindrome(str) {
    let cleanString = str.toLowerCase();
    return cleanString == cleanString.split('').reverse().join('');
}

let string1 = "racecar";
let string2 = "elephant";

console.log(palindrome(string1));
console.log(palindrome(string2));