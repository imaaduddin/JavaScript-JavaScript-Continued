const h1 = document.querySelector("h1");
h1.style.color; // Only works with inline styling which is not recommended, but this will return the color you set to the h1 element 

const p = document.querySelector("p");
p.style.color = "blue"; // Over here you are assigning the p tag to the color blue 

const exLi = document.querySelectorAll("li");
const colors = ["red", "blue", "yellow", "green", "purple", "orange"];

exLi.forEach((el, i) => {
    const color = colors[i];
    console.log(el, color);
})

// The above code basically assigns the colors to the li 