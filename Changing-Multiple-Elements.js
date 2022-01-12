const selectLi = document.querySelectorAll("li");

for (let i = 0; i < selectLi.length; i++) {
    console.log(selectLi[i].innerText); // This will print out all li in order
    selectLi[i].innerText = "Hey!!"; // This chnages all the li to this string
}