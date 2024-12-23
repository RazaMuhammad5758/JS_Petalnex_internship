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

// SINGLE TON OBJECT

// const app = new Object()   // ye singleton object h

const app2 = {}     // non singleton object

app2.id = "123abc"
app2.name = "raza"
app2.IsLoggedIn = false

console.log(app2);

  // OBJECT INSIDE OBJECT
const newUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstname: "raza",
            lastname: "muhammad"
        }
    }
}

console.log(newUser.fullname.userFullName.firstname);

// OBJECT MERGE

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

// another method 

const obj4 = {...obj1, ...obj2}


console.log(obj4);

// Objecct.keys    // keys deta h jese id: , name:, email:, etc

console.log(Object.keys(obj2));

// object.values   // keys ki values deta h

console.log(Object.values(obj1));

// object.entries  // keys or values ko array me bnd kr k deta h

console.log(Object.entries(obj1));  
