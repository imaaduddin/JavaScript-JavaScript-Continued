const form = document.querySelector('#signup');
const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const gadgetSelect = document.querySelector('#gadget');

// form.addEventListener('submit', (e) => {
//     alert("Form submitted!");
//     console.log('cc', creditCard.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('gadgets', gadgetSelect.value);
//     e.preventDefault();
// });

const formData = {};
creditCard.addEventListener('input', (e) => {
    console.log('CC Changed!!!', e);
    formData['cc'] = e.target.value;
})