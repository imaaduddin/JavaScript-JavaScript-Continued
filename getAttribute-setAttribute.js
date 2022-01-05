// getAttribute
const range = document.querySelector("input[type='range']");
range.getAttribute("max"); // This will return whatever the max value is for the input 
// Can also do:
range.getAttribute("min");
range.getAttribute("type");

// setAttribute 
range.setAttribute("min", "500"); // This will set the min to 500 
range.setAttribute("type", "radio"); // Ths will set the type of the input to a radio button

