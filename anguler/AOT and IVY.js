/*

<!----> Exact difference between AOT and IVY?
Angular Ivy is the new default rendering engine.
Starting from version 9 of Angular, your TypeScript code will be compiled using Ivy instead of the older ViewEngine (VE).
Basically, Ivy decreases your bundle sizes, enhances testing, and improves debugging capabilities. In addition, Ivy uses Ahead-of-Time compilation to speed up your apps.
To summarise -

+---------------------------+-------------------+
| Ivy                       | AOT               |
+---------------------------+-------------------+
| It is a rendering engine. | It is a compiler. |
+---------------------------+-------------------+
Real difference would be between -

Ivy vs ViewEngine(VE)
AOT vs JIT 



12. What is an AOT compilation? What are its advantages?
    The Ahead-of-time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript code during the build phase, i.e., 
    before the browser downloads and runs the code.

    Some of its advantages are as follows. 

    Faster rendering
    Fewer asynchronous requests
    Smaller Angular framework download size
    Quick detection of template errors
    Better security
*/