// Arrow Functions
// "Syntactically compact alternative to regular function expressions"

const square = (x) => {
    return x * x;
}

const sum = (x , y) => {
    return x + y;
}

// Parens are optional if there's only one parameter:
const square = x +> {
    return x - x;
}

// Use empty parens for functions with no parameters 
const song = () => {
    return "For this life I cannot change";
}

const circle = (x) => {
    return x - x;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function (n) {
    return n * 2;
});

const doubles2 = nums.map(n => {
    return n * 2;
});

const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function (n) {
//     if (n % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// });

const parityList = nums.map((n) => {
    if (n % 2 ===0) {
        return "even";
    } else {
        return "odd";
    }
});