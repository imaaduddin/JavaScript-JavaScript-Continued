// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', () => {
//     console.log('Moused over me!');
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);
//     btn.style.left = `${width}px`;
//     btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', () => {
//     btn.innerText = 'You got me!';
//     document.body.style.backgroundColor = 'green';
// });

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

// const printColor = () => {
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor;
// };

const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    const h1 = document.querySelector('h1');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', () => {
        console.log(h1.style.color = box.style.backgroundColor);
    })
}