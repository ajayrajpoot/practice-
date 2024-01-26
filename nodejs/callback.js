/** 
 
"I will call back later!"
 A callback is a function passed as an argument to another function
 This technique allows a function to call another function
 A callback function can run after another function has finished 
 */

 /**
  * Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. 
  *Node makes heavy use of callbacks. All APIs of Node are written is such a way that they supports callbacks.
  
For example, a function to read a file may start reading file and return the control to execution environment immediately 
so that next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the 
callback function, the content of the file as parameter. So there is no blocking or wait for File I/O.
This makes Node.js highly scalable, as it can process high number of request without waiting for any function to return 
result


A callback in Node is a non-blocking function that executes upon task completion, enabling asynchronous processing. It facilitates scalability by allowing Nodejs to handle multiple requests without waiting for operations to conclude, as exemplified in file I/O scenarios.


Explanation: The fs library is used for file-system operations. The readFileSync() function is synchronous, halting program execution until completion. This blocking behavior ensures that the program reads the file before progressing further.

Example 1: Code for reading a file synchronously (blocking code) in Nodejs. Create a text file inputfile1.txt with the following content:

Hello Programmer!!!
Learn NodeJS with GeeksforGeeks
// Write JavaScript code
const fs = require("fs");
const filedata = fs.readFileSync('inputfile1.txt');
console.log(filedata.toString());
console.log("End of Program execution");




Explanation: The fs library is utilized for file-system operations. The asynchronous readFile() function allows the program to proceed immediately to the next instruction while the task runs in the background. A callback function is employed to execute upon the completion of the background task.

Example 2: Code for reading a file asynchronously (non-blocking code) in Nodejs. Create a text file inputfile1.txt with the following content.

Hello Programmer!!!
Learn NodeJS with GeeksforGeeks
// Write a JavaScript code
const fs = require("fs");
 
fs.readFile('inputfile1.txt',
    function (ferr, filedata) {
        if (ferr) return console.error(ferr);
        console.log(filedata.toString());
    }
);
console.log("End of Program execution");

.
  */