// Param Destructuring 

const fullName = ({first, last}) => {
    return `${first} ${last}`;
}

const runner = {
    first: "Runner",
    last: "One",
    country: "USA"
}

fullName(runner);

