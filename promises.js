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