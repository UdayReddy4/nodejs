// how to produce a promise

const { log } = require("console");

let myPromice = new Promise(function(resolve ,reject){
    const a =4;
    const b =5;
    
    setTimeout(()=>{
        if(a===b)
        {
            resolve('the values are equal')
        }
        else{
            reject('the values are not equal')
        }
    },2000)
})
// fulfilled - then method
//consuming your promises
myPromice.then(function(result){
    console.log(result);
}) //fullfilled state
myPromice.catch(function(err){
    console.log(err);
})//reject state

// your promise is settled







//pending state
//console.log(myPromice);