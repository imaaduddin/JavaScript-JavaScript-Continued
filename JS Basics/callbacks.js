// Callback Functions
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function 

// function grumpus() {
//     alert("Gahh go away!");
// }

// setTimeout(grumpus, 5000);

// setTimeout(() => {
//     alert("Welcome!");
// }, 5000);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    alert("Why did you click meeee!!!")
})