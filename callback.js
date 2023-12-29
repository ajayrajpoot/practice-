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
result.
  */