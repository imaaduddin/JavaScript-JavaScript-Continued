// Filter 
// Creates a new array with all elements that pass the test implemented by the provided function 

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
    return n % 2 === 1;
    // Our callback returns true or false 
    // if it returns true, n is added to the filtered array
});
//  [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]

const numbers = [45, 65, 76, 43, 13, 21, 98, 76, 85, 56];
const result = numbers.filter(n => n % 2 === 1);
console.log(result);