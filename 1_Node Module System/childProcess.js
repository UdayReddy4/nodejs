//child process is anode module used to create sub process within a script
//you can perform different tasks with your script by just using some methods

const cp =require('child_process')
const { log } = require('console')

// cp.execSync('calc')

// cp.execSync('start chrome')

console.log('output' +cp.execSync('node demo.js'));
