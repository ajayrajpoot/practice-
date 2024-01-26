// -------ex 1

(function() {
    var a = b = 5;
 })();
 console.log(b);
 console.log(a);

 //----2 

 (function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

//----3
 
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());


//----4
 
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");


//-- my out put
script start
script end
 
setTimeout
 
promise1
promise2

async1 start
async2
async1 end
 
//-------5
 
console.log("begins");
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});


begins
 
 
promise 2
 
setTimeout 1
promise 1
 
 
setTimeout 2
 
 
dot then 1
 
 resolve 1
 
 
 