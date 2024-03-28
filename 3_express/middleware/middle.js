function mymiddleWare(req,res,next){
    console.log("i am custom middle ware");
    next()
}

module.exports=mymiddleWare;