const fs = require('fs');

let myFun = function(){
    console.log('my function');

}

fs.readFile('./sample.txt', (err, data)=>{
    console.log(data);
});

myFun();

 /** output
my function 
 <Buffer 74 65 73 74>
*/

