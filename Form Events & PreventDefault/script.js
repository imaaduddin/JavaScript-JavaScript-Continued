const form = document.querySelector('#signup');

form.addEventListener('submit', (e) => {
    alert("Form submitted!");
    e.preventDefault();
})