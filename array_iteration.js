// FOR EACH LOOP

// array  k elements ko separately print krta h

const a = ['raza', 'moiz', 'noman', 'ibrahim']

a.forEach(function(value, index){
    console.log(index, value);
    
})

// ANOTHER METHOD is this k function ko bahr b likh skty hen

const b = ['raza', 'moiz', 'noman', 'ibrahim']

b.forEach(loop)

function loop(value, index){
    console.log(index, value);
    
}

// MAP  map new array return krta h jis me hr element pr functionality apply hui hoti h 

let ary = [5,10,15,20]

let newAry = ary.map(function(value){
    return value*10
})

console.log(newAry);


const infoArray = [
    {
        firstName: "Raza",
        lastName: "Muhammad"
    },
    {
        firstName: "Moiz",
        lastName: "Rehman"
    }
]

const infoArray2 = infoArray.map(function(name){
    return name.firstName + name.lastName
})

console.log(infoArray2);


// FILTER   condition k mutabiq array ko filter kr k new array bna k deta h


const Ages = [15, 16, 13, 10, 55]

const fAges = Ages.filter(agesfunc)

function agesfunc(age) {
    return age >= 15
}

console.log(fAges);

// REDUCE 

const prices = [100, 200, 400, 540]

const total = prices.reduce(sum);

console.log(total);


function sum(current, next){
    return current + next
}

