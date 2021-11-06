// Map
// Creates a new array with the results of calling a callback on every element in the array 

const texts = ["lol", "lmao", "lmfao", "omfg"];

const caps = texts.map(function (t) {
    return t.toUpperCase();
});

console.log(caps);
// Prints out texts array in all caps 

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "gtg", "tfti", "omw"];

const doubles = numbers.map(function (num) {
    return num * 2;
});

const numDetail = numbers.map(function (numb) {
    return {
        value: numDetail,
        isEven: numb % 2 === 0
    }
});

console.log(numDetail);

const doubles2 = [];
for (let num of numbers) {
    doubles2.push(num * 2);
}

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split("").join(".");
});