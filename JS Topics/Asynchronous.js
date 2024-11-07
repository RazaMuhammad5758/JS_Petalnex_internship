const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name:"Raza", class: "BSSE"})
        }else{
            reject("ERROR")
        }
    },1000)
})



async function consumePromiseFive() {
    try{
        const data = await promiseFive
        console.log(data);
    } catch(err){
        console.log(err);
        
    }
}

consumePromiseFive()

// another way

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
    
// }
// getAllUsers()

// another way

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{ 
    console.log(error);
})

