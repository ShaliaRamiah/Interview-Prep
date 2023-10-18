function anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 == sortedStr2;
}

let str1 = "silent";
let str2 = "listen";

let anagramResult = anagrams(str1, str2);

if (anagramResult) {
    // console.log(str1 + " and " + str2 + " are anagrams")
    console.log(`${str1} and ${str2} are anagrams`)
} else {
    // console.log(str1 + " and " + str2 + " are not anagrams")
    console.log(`${str1} and ${str2} are not anagrams`)
}