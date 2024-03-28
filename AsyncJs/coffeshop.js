function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink ==='coffee'){
            resolve('order for coffee recieved')
        }else{
            reject('other order is rejected')
        }

    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(`${order} and is served`)

    })
}
// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed;
// }).then(function(processOrder){
//     console.log((processOrder));
// }).catch(function(err)
// {
//     console.log(err);
// })//solution for promises
// these  process is know as chaining of promise


//ASyn Await are keywords

async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder);

    } catch (error) {
        console.log(error);
    }
    
}

serveOrder()

