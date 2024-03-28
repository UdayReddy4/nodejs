function secondMiddleWare(req,res,next){
    console.log("I am the second Middle Ware");
    next()
}

module.exports=secondMiddleWare