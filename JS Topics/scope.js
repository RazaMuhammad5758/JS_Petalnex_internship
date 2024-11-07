// Global Scope: Accessible everywhere.
// Local Scope: Accessible only within the function where it’s declared.
// Block Scope: Accessible only within the block {} where it’s declared (with let and const).
// Lexical Scope: Inner functions can access variables from the outer function’s scope due to where they are defined.


let d = 10  // global scope
var c = 60

if(true){  // block scope
    let a = 10;
    const b = 20;
    var c = 30; // var scope rule ko follow nahi krta
    
}
// console.log(a);
// console.log(b);
console.log(c);
console.log(d);
