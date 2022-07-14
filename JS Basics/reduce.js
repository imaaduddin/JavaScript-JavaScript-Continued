// REDUCE
// Executes a reducer function on each element of the array, resulting in a single value 

// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// CALLBACK     accumulator     currentValue     return value
// first call   3               5                8
// second call  8               7                15
// third call   15              9                24
// fourth call  24              11               35



// const nums = [3, 4, 5, 6, 7];
// const product = nums.reduce((total, currentVal) => {
//     return total * currentVal;
// });



// const grades = [87, 76, 89, 97, 83, 74, 99, 92, 93, 85, 79, 70, 95, 74];

// const maxGrade = grades.reduce((max, currentVal) => {
//     if (currentVal > max) {
//         return currentVal;
//     } else {
//         return max;
//     }
// });

// console.log(maxGrade);

// const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
//     return sum + currVal;
// }, 100); // Basically over here it starts at 100, then adds all the numbers in the array to 100 so it'll be 250

// console.log(sum);

const votes = ["y", "y", "n", "y", "n", "n", "n", "y", "n", "y", "y", "n"];

const results = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }
    return tally;
}, {}); // This checks of many "y" and "n" are in the array

