// For Each
// Accepts a callback function.
// Calls the function once per element in the array 

const nums = [1, 5, 7, 5, 4, 8, 9, 0 ,3, 5, 2, 7];

nums.forEach(function (n) {
    console.log(n * n);
    // prints all the numbers in the num array squared 
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
        // prints all numbers that are divisible by 2 with no remainder 
    }
});

function printTriple(x) {
    console.log(x * 3);
}

nums.forEach(printTriple);
// Will triple the numbers in the nums array 