// //files 
// //In files we can read ,write

const fs = require('fs')

// // reading a file

// let readingFile=fs.readFileSync('f2fs.txt')

// console.log('data of file is =>' +readingFile);
 
// // writing in file==> when u writing in file already exesting data will overriden and show new data which u wrote

// fs.writeFileSync('f2fs.txt',"this file 2 for fs")

// //append(or)update a file

// fs.appendFileSync('f2fs.txt','this is new line for this txt file')

// console.log('file is updated');


// // deleting a file
// fs.unlinkSync('f3fs.txt')
// console.log('file is deleted');


//creating directory

// fs.mkdirSync('myDirectory')

//check the contant in directory
// let folderPath = 'C:\\Users\\Admin\\Desktop\\node\\1_Node Module System\\myDirectory'

// let folderContant=fs.readdirSync(folderPath)

// console.log("Folder Conent", folderContant);

//check wheather a directory exists r not

let doesExit =fs.existsSync('myDirectory')

console.log(doesExit);

//remove directory
fs.rmdirSync('myDirectory')
console.log('dir has been deleted');




