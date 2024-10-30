// |── Promises
// | ├── Promise states
// | | ├── Pending
// | | ├── Fulfilled
// | | └── Rejected
// | ├── Promise methods
// | | ├── then()
// | | ├── catch()
// | | └── finally()
// | └── Promise.all()


//promises ki 3 states hoti hen 
//pending, fulfilled, rejected

// Promises provide a way to handle asynchronous tasks like data fetching, file reading, or timers in a cleaner, more predictable manner than using traditional callbacks.

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 2000)
})

// resolve or then apis me connect hoty hen

promiseOne.then(function(){
    console.log("promise is consumed");
    
})

// another way of writing promise

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("new promise is complpeted");
        resolve()
    }, 2000)
}).then(function(){
    console.log("new promise is consumed");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Raza",
            email: "razamd7714"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


// another way

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name: "moiz", fathername: "AbdulRehman"})
        }else{
            reject("Error occur")
        }
    }, 1000)
   
})

promiseFour.then((user)=>{
    console.log(user);
    return user.name
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})

// another way TRY CATCH

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({course: "PHP", price: "1000"})
        }else{
            reject("Rejected")
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
    
}
consumePromiseFive()

