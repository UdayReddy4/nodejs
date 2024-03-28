const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDataBase')
.then(()=>console.log('connection is success'))
.catch(err=>console.error('coulnt connect to mongo',err))


//schema

const courseSchema= new mongoose.Schema({
    name : String,
    creator : String,
    publishedDate : {type:Date ,default:Date.now},
    isPublished : Boolean
})

const Course = mongoose.model('Course',courseSchema)

async function createCourse(){
    const course = new Course({
        name : 'javaScript',
        creator :'mrinal',
        isPublished : true
    })
    
    const result = await course.save()
    console.log(result);
}

createCourse()
