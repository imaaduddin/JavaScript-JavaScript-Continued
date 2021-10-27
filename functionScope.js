// Things to know about functions

// Scope is variable visibility 
// The location where a variable is defined dictates where we have access to that variable

// FUnction Scope
function helpMe() {
    let msg = "I'm on fire!!!";

    msg; // "I'm on fire!!!";
}

msg; // NOT DEFINED!

// In above example msg is scoped to the helpMe function 