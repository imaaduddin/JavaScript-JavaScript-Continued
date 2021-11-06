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