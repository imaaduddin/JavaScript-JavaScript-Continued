// REDUCE
// Executes a reducer function on each element of the array, resulting in a single value 

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

// CALLBACK     accumulator     currentValue     return value
// first call   3               5                8
// second call  8               7                15
// third call   15              9                24
// fourth call  24              11               35



const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
});

