/***
 https://www.youtube.com/watch?v=lJ4jsJjlR4I
 
what is nod JS
Q66: Explain what is Reactor Pattern in Node.js?
At its heart, the Reactor pattern embraces non-blocking I/O, a paradigm shift where system calls return immediately, freeing threads to perform other tasks while they await data. This fundamental departure from traditional blocking I/O marks a pivotal moment in how Node.js

what is V8

What is node js? 0:19
Why to use node js? 0:38
  
Npm ? 7:33

Module-exports? 7:53 
If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default.
// greetings.js
const greeting = "Hello, world!";
export default greeting;

// app.js
import greeting from "./greetings.js";
console.log(greeting); // outputs "Hello, world!"


If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports.
// greetings.js
export const greeting = "Hello, world!";
export const farewell = "Goodbye, world!";
// app.js
import { greeting, farewell } from "./greetings.js";
console.log(greeting); // outputs "Hello, world!"
console.log(farewell); // outputs "Goodbye, world!"
 
➡️ What is forever? 10:12     
 Forever is an npm module that ensures a Node. js script continuously runs in the background on the server. 

 Synchronous JavaScript
    https://www.telerik.com/blogs/how-javascript-code-gets-executed-synchronous-asynchronous#:~:text=JavaScript%20is%20synchronous%2C%20blocking%20and,log%20statements.
    JavaScript is synchronous, blocking and single-threaded. This means that the JavaScript engine executes our program sequentially, one line at a time from top to bottom in the exact order of the statements.
*/