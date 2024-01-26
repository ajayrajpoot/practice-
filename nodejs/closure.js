/**
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
 closures are created every time a function is created, at function creation time.
 */

 function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();



//lexical Scope
// console.log("When inner function accessess variable of outer function")

//closure
// console.log("When inner fuction accessess variable of outer function but on execution time(remebers it as well)")
 
function hello(){
    var a=10;
    function innerFunction(){
        return a;//lexical scope
    }
    return innerFunction;
}
var inner=hello();//
// function innerFunction(){
//     return a;//lexical scope
// }
console.log(inner())//this is closure