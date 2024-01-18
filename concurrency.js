/*
https://hackernoon.com/how-does-nodejs-achieve-concurrency

Why Node.js cannot use Multi-Threading

When compared to busy-waiting or polling, multi-threading is a better approach to achieve concurrency. 
Many programming languages and frameworks use multi-threading successfully.


However, Node.js cannot use multi-threading. This is because Node.js uses JavaScript and JavaScript is single-threaded.


So is there no hope?


Actually, there is another mechanism to enable non-blocking resources. This mechanism is known as Event Demultiplexing. You can also call it the Event Notification Service.

The below illustration shows the Event Demultiplexing concept.

*/