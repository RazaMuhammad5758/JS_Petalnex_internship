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

promiseOne.then(function(){
    console.log("promise is consumed");
    
})