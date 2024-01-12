
 /** 
  * 
https://makimo.com/blog/shallow-and-deep-copies-in-javascript/#:~:text=We%20have%20two%20kinds%20of,that%20contain%20only%20primitive%20values.&text=Nested%20objects%20mean%20objects%20that%20contain%20non%2Dprimitive%20values.


There are 8 data types which belong to two different value types: primitives and objects. Let’s see how the two differ.

Primitives are all the data types except objects. That means:

Boolean
Null
Undefined
String
Number
Bigint
Symbol
Primitives are immutable (they do not have methods or properties that can alter them).

Objects are all other JavaScript elements, such as object literals, arrays, dates, 
etc., and they are mutable. That means that certain methods can alter them.



In programming languages there are two spaces to store data in computer memory: the stack and the heap.

The stack is a temporary storage memory to store local primitive variables and references to objects.

The heap stores global variables. Object values are stored on the heap and the stack contains just references to them (pointers).

All primitives in any programming language are passed by value and all non-primitives are passed by reference (more about that later).



In programming languages there are two spaces to store data in computer memory: the stack and the heap.

The stack is a temporary storage memory to store local primitive variables and references to objects.

The heap stores global variables. Object values are stored on the heap and the stack contains just references to them (pointers).


*/
