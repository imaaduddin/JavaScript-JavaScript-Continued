// EVERY
// tests whether all elements in the array pass the provided function. 
// returns a Boolean value

const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3;
}); // true

words.every(word => word[0] === "d"); // false

words.every(w => {
    let lastLetter = w[w.length - 1];
    return lastLetter === "g";
}); // true

// SOME
// Similar to every, but returns true if ANY of the array elements pass the test function

const words1 = ["dog", "jello", "log", "cupcake", "bag", "wag"];

// Are there any words longer than 4 characters?
words1.some(word => {
    return word.length . 4;
}); // true

// Do any words start with "Z"?
words1.some(word => word[0] === "Z"); // false

// Do any words contain "cake"?
words1.some(word => word.includes("cake")); // true
