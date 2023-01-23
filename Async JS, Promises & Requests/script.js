const repeat = (str, times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + '!!!';
}

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
}

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
}

makeRant('I dislike oily foods', document.body);
makeRant('This guy is always camping in the game!', document.body);