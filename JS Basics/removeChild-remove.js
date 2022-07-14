const ul = document.querySelector("section ul"): // selecting an element here 

const removeMe = ul.querySelector(".special"); // search within the ul with class name of special 

const deleted = ul.removeChild(removeMe); // this will delete the element with class name of special 

const h1 = document.querySelector("h1");
h1.remove(); // this will remove the h1 element with remove you don't need to have the parent element 
