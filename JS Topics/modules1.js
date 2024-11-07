// common js method

const hello =()=>{
    console.log("Hello Raza");
}

const ahello =(name)=>{
    console.log("hellow "+ name);
    
}

module.exports = {hello, ahello}

// ES6 modules

export const newModule = ()=>{
    console.log("How are you");
    
}
export const secModule = ()=>{
    console.log("I am fine");
    
}
