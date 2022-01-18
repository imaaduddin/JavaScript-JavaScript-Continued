const firstP = document.createElement("p");
firstP.innerText = "Hello Hi Hey!!!";

const firstLink = document.createElement("a");
firstLink.innerText = "Click Me!";

firstP.append(i, firstLink); // This will put the link as a child of the paragraph element and put it at the bottom or after the paragraph element 
firstP.prepend(i, firstLink); // This will make the link tag a chile of the paragraph element but will put the link tag before the paragraph element 