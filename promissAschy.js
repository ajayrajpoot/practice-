/***
 *What do you mean by Asynchronous API?
 All APIs of Node.js library are aynchronous that is non-blocking. 
 It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it 
 and a notification mechanism of Events of Node.js helps server to get response from the previous API call.

async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise


 "I will finish later!"
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout();


let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject();  // when error
});




 */