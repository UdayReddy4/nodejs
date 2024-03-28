const express =require ('express')

const morgan=require('morgan')

const mymiddleWare =require('./middleware/middle')
const secondMiddleWare=require('./middleware/middleware1')

const app =express()


//get, post, put, delete

app.use(express.json())
// Middleware functions are invoked sequentially in a pipeline, and they can be used to perform tasks such as logging, authentication,
//and error handling.
app.use(mymiddleWare)

app.use(secondMiddleWare)

app.use(morgan('tiny'))

let courses =[
    {id:1 ,name:'javascript'},
    {id:2 , name:'java'},
    {id:3,name:'python'},
]
// .get --> is used read functionality 
app.get('/',(req ,res)=>{
    res.send('Hello form  topices ')
})

app.get('/about',(req,res)=>{
    res.send('we create inpact')
})
app.get('/contact',(req,res)=>{
    res.send('we contact create inpact')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.post('/courses',(req,res)=>{
    const course={
        id:courses.length +1,
        name :req.body.name
    }
 courses.push(course)
 res.send(course)
})

//put method
app.put('/courses/:coursename',(req,res)=>{
let  course =courses.find(course => course.name === req.params.coursename)
if(!course)res.status(404).send('the courses you are looking are not exists')
   
course.name=req.body.name
res.send(course)
})// update data


///Route parameters

app.get('/courses/:coursename',(req,res)=>{
   // console.log(req.params.coursename);
    let course =courses.find(course => course.name === req.params.coursename)
    //res.send(req.params.id);
    

    if(!course)res.status(404).send('the courses you are looking are not exists')
    res.send(course)
})

// app.delete('/courses/:coursename',(req,res)=>{
//     let UpdateCourses =courses.filter(course=>course.name!==req.params.coursename)

//     courses=UpdateCourses
//     res.send(courses)
// })
app.delete('/courses/:id',(req,res)=>{
    let course =courses.find(course => course.id ===parseInt( req.params.id))
    if(!course)res.status(404).send('the courses you are looking are not exists')
 const index =courses.indexOf(course)
courses.splice(index,1)
res.send(course)
})
const port =process.env.port || 30000

app.listen(port ,()=>console.log('port is running on ${port}'))

