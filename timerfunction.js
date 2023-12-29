setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));
console.log('current event loop');


/**--out put
current event loop
nextTick
timeout
immediate
 */

/**The first one executed was process.nextTick, which puts its callback at the front of the event queue. 
 * It will execute after the code currently being executed but before any I/O events or timers.

Next is "timeout". Since we passed setTimeout a timeout of 0, there's no additional enforced delay before 
its execution, and it is placed on into the timer queue during the next loop.

Finally, we have setImmediate, which is clearly not as immediate as its name suggests! 
Its callback is placed in the check queue of the next cycle of the event loop. Since the check 
queue occurs later than the timer queue, setImmediate will be slower than setTimeout 0. 
*/