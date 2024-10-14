// |── Objects
// | ├── Object properties
// | | ├── Dot notation
// | | └── Bracket notation
// | ├── Object methods
// | | ├── Object.keys()
// | | ├── Object.values()
// | | └── Object.entries()
// | └── Object destructuring


// object declaration

const user = {
    name: "raza",
    email: "razamd7714@gmail.com",
    age: 23,
    location: "Karachi",
    isloggedIn: false,
    lastLoggedIn: ["monday", "saturday"]

}

// how to access object 

console.log(user.name);
console.log(user["email"]);  // is tarha b access kr skty hen agr object me email "email" ese likha ho to

// how to edit object values

user.age = 18

console.log(user["age"]);

// agr hum chahty hen k changes naa hon to object ko freeze b kr skty hen

Object.freeze(user)

user.name = "raza muhammad"
console.log(user.name);





