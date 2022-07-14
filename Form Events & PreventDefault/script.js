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

// const formData = {};
// creditCard.addEventListener('input', (e) => {
//     console.log('CC Changed!!!', e);
//     formData['cc'] = e.target.value;
// });

// gadgetSelect.addEventListener('input', (e) => {
//     console.log('GADGET!', e);
//     formData['gadget'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('CHECKBOX', e);
//     formData['agreeToTerms'] = e.target.checked; 
// });

// a better way to write:
const formData = {};
for (let input of [creditCard, termsCheckbox, gadgetSelect]) {
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
}