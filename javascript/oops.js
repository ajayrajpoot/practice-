/**
 * Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.
 * 
 * OOP was developed to make code more flexible and easier to maintain.

What is a Class?
You can think of a class like a blueprint of a house. A class is not a real world object but we can create objects from a class. It is like an template for an object.
We can create classes using the class keyword which is reserved keyword in JavaScript. Classes can have their own properties and methods


What is an Object?
An object is an instance of a class. Now with the help of the house class we can construct a house. We can construct multiple houses with the help of same house class.

class Student{
    // Data (Properties)
    Name = "Gorge"
    Age = 18
    Standard = 12
    
    // Methods (Action)
    study(){
        // Study
    }
        
    Play(){
        // Play
    }
        
    doHomeWork(){
        // Do Home Work
    }   
    
}



-------------------------
There are 4 main principles in OOP, and they are:

1. Abstraction
    Abstraction is the process of hiding the internal details of an application from the outer world. Abstraction is used to describe things in simple terms. It's used to create a boundary between the application and the client programs.

    Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.

    For example, take a cell phone. We don't show details like verifyTemperature(), verifyVolt(), frontCamOn(), frontCamOff() and so on. Instead we provide essential features which matter to user like camera(), volumeBtn(), and others.

2. Encapsulation

    Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

    This will keep code that's outside the class from accidentally manipulating internal methods and properties.
    Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world.

    Encapsulation can be achieved using two techniques:

    Table of Content

    Using Closures
    Using Classes


Inheritance
    Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships. We will discuss inheritance in further section of this article with pratical example.

    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    let myCar = new Model("Ford", "Mustang");
    document.getElementById("demo").innerHTML = myCar.show();

Polymorphism

    Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.

    class User{
        login(providedPassword){
        // Login User
        }
    }
    class Admin extends user{ 
        
        login(providedPassword){
        // Login User
        }
    }

----------------
Object-Oriented Programming in JavaScript
We have now discussed the basics of OOP. But OOP in JavaScript is bit different. We have an object linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).


How to Implement Prototypal Inheritance in JavaScript
There are three main ways to implement Prototypal Inheritance in JavaScript:

1.  Using Constructor Functions
    We can create objects from a function. With the help of a constructor function, built-in objects like arrays, sets, and others are actually implemented.

    In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set its values for any existing object properties

    function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
    };

    let p1 = new Person('John', 'Doe');
    let p2 = new Person('Jane', 'Doe');

    console.log(p1.getFullName());
    console.log(p2.getFullName());


2. Using ES6 Classes
    Classes are an alternative to the constructor function syntax for implementing prototypal inheritance. We also call classes syntactic sugar.
    
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return this.firstName + " " + this.lastName;
        }
    }

    let p1 = new Person('John', 'Doe');
    let p2 = new Person('Jane', 'Doe');

    console.log(p1.getFullName());
    console.log(p2.getFullName());

3. Using Object.create()
    This is the easiest way to link an object to a prototype object. It is a method used to create a new object with the specified prototype object and properties.

    The object.create() method returns a new object with the specified prototype object and properties.
 */