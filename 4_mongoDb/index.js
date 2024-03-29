const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDataBase')
.then(()=>console.log('connection is success'))
.catch(err=>console.error('coulnt connect to mongo',err))


//schema

const courseSchema= new mongoose.Schema({
    name : String,
    creator : String,
    publishedDate : {type:Date ,default:Date.now},
    isPublished : Boolean,
    rating : Number
})

const Course = mongoose.model('Course',courseSchema)

async function createCourse(){
    const course = new Course({
        name : 'c',
        creator :'mal',
        isPublished : true,
        rating : 4.6
    }) //creating data
    
    const result = await course.save()
    console.log(result);

    
}
//createCourse()

//eq(equal)
//gt(greater than)
//gte (greater than and equal to)
//lt(less than)
//lte(less than and equal to)

//in
//not in


/* Logical Operators
 or
 and
 */



// async function getCourses(){
// const courses=  await Course.find({rating : {$in :[4.4,4.5,4.6]}}).select({name :1})
// .or([{creator :'mrina'},{rating :4}])

// console.log(courses);

// } //reading data

// getCourses()



async function updateCourse(id){
let course =await Course.findById(id)
if(!course) return;

course.name ='c++'

course.creator ='ila'

const updateCourse =await course.save()
console.log(updateCourse);


} //updating

updateCourse('6605539397c3d48a00cbffda')

// deleting

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)
    console.log(course);
}

deleteCourse('6605539397c3d48a00cbffda')


