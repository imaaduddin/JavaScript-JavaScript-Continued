// Lexical Scope

function outer() {
    let hero = "All Might";

    function inner() {
        let cryForHelp = `${hero}, please save me!`;
        console.log(cryForHelp);
    }

    inner();
}