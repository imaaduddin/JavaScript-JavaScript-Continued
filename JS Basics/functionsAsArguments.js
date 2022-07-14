// Higher Order Functions 

// Functions that operate on/with other unctions. 
// They can:
// - Accept other functions as arguments 
// - Return a function 

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

// function cry() {
//     console.log("I'm so sad :(");
// }

// function rage() {
//     console.log("I'm mad!");
// }

// callThreeTimes(cry);

// function repeatNTimes(action, num) {
//     for (let i = 0; i < num; i++) {
//         action();
//     }
// }

// repeatNTimes(cry, 10);

// function pickOne(f1, f2) {
//     let rand = Math.random();
//     console.log(rand);
//     if (rand < 0.5) {
//         f1();
//     } else {
//         f2();
//     }
// }

// pickOne(cry, rage);


// Returning Functions 
// function multiplyBy(num) {
//     return function(x) {
//         return x * num;
//     }
// }

// const triple = multiplyBy(3);
// triple(2); // will return 6

function makeBetweenFunc(x, y) {
    return function(num) {
        if (num >= x && num <= y) {
            return true;
        } else {
            return false;
        }
    }
}

const isChild = makeBetweenFunc(0, 13);
console.log(isChild(7));

