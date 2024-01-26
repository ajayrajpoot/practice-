// var
// ---1-----------------
if (true) {
    mes = "Hello";
    console.log("with in scope", mes);
}
console.log("work as gloaly", mes);

// ---2-----------------

if (true) {
    var mes = "Hello";
    console.log("with in scope", mes);
}
console.log("work as gloaly", mes);
