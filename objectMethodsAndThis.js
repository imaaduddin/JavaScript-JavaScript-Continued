// Object Methods & This 

const role = "host";
const person = "Person One";
const role2 = "director";
const person2 = "Person Two";

const team = {}
team[role] = person;
team[role2] = person2;

// Can also do this:

const team2 = {
    [role]: person,
    [role2]: person2
}

// Methods to Objects:

// METHODS 
// We can add functions as properties on objects 
// We call them methods 

const math = {
    multiply: function(x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function(x) {
        return x * x;
    }
}

