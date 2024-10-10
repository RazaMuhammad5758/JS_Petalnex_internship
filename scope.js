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
