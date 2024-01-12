/*

In JavaScript, the event loop is a fundamental mechanism that enables the asynchronous execution of code. It’s an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently. The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control.

What does it mean when we say JavaScript is single-threaded?
It means that the main thread where JavaScript code is run, runs in one line at a time manner and there is no possibility of running code in parallel.

How do Event loops work?

Call Stack:
JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).

Callback Queue:
Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.

Event Loop:
The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

Execution:
The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.

Callback Execution:
When an asynchronous operation is complete, its callback is placed in the callback queue.

Repeat:
The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

Example: In this example, a JavaScript script demonstrates synchronous blocking behavior. It starts by logging “Before delay,” then uses a function delayBySeconds to create a delay of 5 seconds using a busy-wait loop. The script then logs “After delay” after the 5-second delay completes.



Heap memory
Data stored randomly and memory allocated
Stack memory
Memory allocated in the form of stacks. Mainly used for functions.

*/