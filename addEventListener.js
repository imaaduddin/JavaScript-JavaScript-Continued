// Not great way
const btn = document.querySelector('.button');

// btn.onclick = () => {
//     console.log("you clicked me bruh");
// }

// Better way using addEventListener 
btn.addEventListener('click', () => {
    console.log('click 1');
});

btn.addEventListener('click', () => {
    alert('click 2');
});

btn.addEventListener('mouseover', () => {
    console.log('nice!');
})