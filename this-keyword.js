// THIS

function sayHi() {
    console.log("HI");
    console.log(this);
}

const greet = function() {
    console.log(this);
}

const person = {
    first: "Obito",
    last: "Uchiha",
    nickName: "Tobi",
    fullName() {
        console.log(this);
    }
}

// The value of this depends on the invocation context of the function it is used in

const jutsus = {
    ninjutsu: ["chidori", "raikiri", "rasengan"],
    pickJutsu() {

    },
    start() {

    }
} 