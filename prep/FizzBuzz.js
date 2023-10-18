// FizzBuzz

//i = 1 (1-100)
//if i = 0, it would print from 0-99

for (i = 1; i <= 100; i++) {
    //if i is divisible by 3 and 5  
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        //if i is divisible by 3 
    } else if (i % 3 == 0) {
        console.log("Fizz");
        //if i is divisible by 5  
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

