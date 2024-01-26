/*
https://hackernoon.com/how-does-nodejs-achieve-concurrency

Why Node.js cannot use Multi-Threading

When compared to busy-waiting or polling, multi-threading is a better approach to achieve concurrency. 
Many programming languages and frameworks use multi-threading successfully.


However, Node.js cannot use multi-threading. This is because Node.js uses JavaScript and JavaScript is single-threaded.


So is there no hope?


Actually, there is another mechanism to enable non-blocking resources. This mechanism is known as Event Demultiplexing. You can also call it the Event Notification Service.

The below illustration shows the Event Demultiplexing concept.

There are three important steps in the Event Demultiplexing process:

1. First, the resources are added to a watchlist. Each resource has an associated operation such as read or write.

2. This watchlist of resources along with the callbacks is assigned to the Event Demultiplexer. 
The demultiplexer makes a synchronous and blocking call for any events generated from the watched resources. 
When the demultiplexer eventually returns from the blocking call, it has a new set of events available for processing.
3. Each event returned by the Event Demultiplexer is processed by the application callback methods. At this point, 
the resource is guaranteed to be ready to read and it will not block during the operation. When all the events are processed, 
the demultiplexer will again make a blocking request for the next set of events.


This process of checking for events, processing them, and checking again is known as the Event Loop and forms the basis of concurrency in Node.js. Moreover, the Event Demultiplexer makes it possible to handle the entire process in a single thread.


There is no need for multi-threading. No need for busy waiting and polling. A single thread with very little idle time is enough. Tasks are spread over time instead of being divided between multiple threads.


*/