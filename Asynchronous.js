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