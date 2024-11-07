// |── Arrays
// | ├── Array methods
// | | ├── push()    last me value add krta h
// | | ├── pop()     last value remove krta h
// | | ├── shift()    start ki value remove krta h
// | | ├── unshift()  start me value add krtra h
// | | ├── splice()     array me se given range ko ghaeb kr k wahi print krta h
// | | ├── slice()    given range ko print krta h except last
// | | └── concat()   2 arrays ko merge krta h
// | └── Array iteration
// | ├── forEach()
// | ├── map()
// | ├── filter()
// | └── reduce()


const MyArray = [1,2,3,4,5]

MyArray.push(6)  // last me value add krta h

MyArray.pop()    // last value remove krta h

MyArray.unshift(15)  // start me value add krtra h

MyArray.shift()  // start ki value remove krta h

const newArray = MyArray.join()  // array ko string me convert krta h

console.log(newArray);
console.log(MyArray);


const ArrayOne = ["a", "b", "c"]
const ArrayTwo = ["d", "e", "f"]

const result = ArrayOne.concat(ArrayTwo)  // merge two arrays

// another way of doing this is spread operator

const result2 = [...ArrayOne, ...ArrayTwo]

console.log(result);
console.log(result2);

const another_array = [1,2,3,4,[5,6,7,8,[9,10,11,12]]]

const real_another_array = another_array.flat(Infinity)  // array k items ko flat krta h

console.log(real_another_array);


console.log(Array.from("abcdefg"));  // kisi b text ko array me convert krega

