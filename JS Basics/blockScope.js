// Block Scope
let radius = 8;

if (radius > 0) {
    const PI = 3.14;

    let circ = 2 * PI * radius;
}

console.log(radius); // 8
console.log(PI); // NOT DEFINED
console.log(circ); // NOT DEFINED

// PI and circ are scoped to the BLOCK