/**
1. What is anguler ?
    Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. 
    As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications 
    in a maintainable manner. 

2. What is anguler Js ?



3.  What is JavaScript ?
    JavaScript is the most commonly used client-side scripting language. It is written into HTML documents to enable interactions with web pages in many unique ways. 
    As a relatively easy-to-learn language with pervasive support, it is well-suited to develop modern applications. 


4 .What is Document Object Model (DOM) ?
    DOM (Docume  structure of HTML tags.

5. What is TypeScript ? 
    TypeScript defines a set of types to JavaScript, which helps users write JavaScript code that is easier to understand. 
    All of the TypeScript code compiles with JavaScript and can run smoothly on any platform. TypeScript is not compulsory for developing an Angular application. 
    However, it is highly recommended as it offers better syntactic structure—while making the codebase easier to understand and maintain. 
    npm install -g typescript

6. What is Data Binding ?
    Data binding is a process that enables users to manipulate web page elements through a web browser.
    It employs dynamic HTML and does not require complex scripting or programming. Data binding is used in web pages that include interactive components, 
    such as calculators, tutorials, forums, and games. It also enables a better incremental display of a web page when pages contain a large amount of data. 

    Angular uses the two-way binding. The model state reflects any changes made in the corresponding UI elements. 
    Conversely, the UI state reflects any changes in the model state. This feature enables the framework to connect the DOM to the model data through the controller.


7. Angular Architecture
    Angular is a full-fledged model-view-controller (MVC) framework. It provides clear guidance on how the application should be structured and offers 
    bi-directional data flow while providing real DOM. 


    1. Modules
    An Angular app has a root module, named AppModule, which provides the bootstrap mechanism to launch the application.

    2. Components
    Each component in the application defines a class that holds the application logic and data. A component generally defines a part of the user interface (UI).

    3. Templates
    The Angular template combines the Angular markup with HTML to modify HTML elements before they are displayed. There are two types of data binding: 

    Event binding: Lets your app respond to user input in the target environment by updating your application data.
    Property binding: Enables users to interpolate values that are computed from your application data into the HTML.
    4. Metadata
    Metadata tells Angular how to process a class. It is used to decorate the class so that it can configure the expected behavior of a class.

    5. Services
    When you have data or logic that isn’t associated with the view but has to be shared across components, a service class is created. 
    The class is always associated with the @Injectible decorator.

    6. Dependency Injection
    This feature lets you keep your component classes crisp and efficient. It does not fetch data from a server, validate the user input,
     or log directly to the console. Instead, it delegates such tasks to the services.

    Angular comes with its own set of advantages and disadvantages. The next two sections briefly explain them.


    
What are controllers?

16. What are Pure Pipes? 
    These pipes are pipes that use pure functions. As a result of this, a pure pipe doesn't use any internal state, and the output remains the 
    same as long as the parameters passed stay the same. Angular calls the pipe only when it detects a change in the parameters being passed.
    A single instance of the pure pipe is used throughout all components. 

17. What are Impure Pipes?
    For every change detection cycle in Angular, an impure pipe is called regardless of the change in the input fields. Multiple pipe instances
    are created for these pipes. Inputs passed to these pipes can be mutable. 

    By default, all pipes are pure. However, you can specify impure pipes using the pure property, as shown below.

    @Pipe({
      name: 'demopipe',
      pure : true/false 
    })

    export class DemopipePipe implements PipeTransform { transform(value: unknown, ...args: unknown[]): unknown {  return null; } }



8. What are decorators in Angular? 
    Decorators are a design pattern or functions that define how Angular features work. They are used to make prior modifications to a class,
    service, or filter. Angular supports four types of decorators, they are:

    1. Class Decorators
    2. Property Decorators
    3. Method Decorators
    4. Parameter Decorators

9. What are Directives in Angular?
    Directives are attributes that allow the user to write new HTML syntax specific to their applications. They execute whenever the Angular
    compiler finds them in the DOM. Angular supports three types of directives.  

    Component Directives
    Structural Directives
    Attribute Directives 

10. What are Components in Angular?
    Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template 
    and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out 
    into other components creating a hierarchy.

11. What are Pipes in Angular? 
    Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding.
    Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs. 

    Some key features include: 

    Pipes are defined using the pipe “|” symbol. 
    Pipes can be chained with other pipes.
    Pipes can be provided with arguments by using the colon (:) sign.
    
    
    Angular is a robust front-end JavaScript framework that is widely used for app development.
    With the increased popularity, there is a high demand for Angular developers.
    This article on Angular Interview Questions will present some commonly asked questions and how to answer them. 
    The questions are bifurcated into two levels, beginner and advanced. 
  

1. What is Angular? Why was it introduced?
    Angular was introduced to create Single Page applications. This framework brings structure and consistency to web applications and provides excellent scalability and maintainability. 

    Angular is an open-source, JavaScript framework wholly written in TypeScript. It uses HTML's syntax to express your application's components clearly. 

2. What is TypeScript?
    TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain. Ultimately, TypeScript code compiles down to JavaScript that can run efficiently in any environment. 

3. What is data binding? Which type of data binding does Angular deploy?
    Data binding is a phenomenon that allows any internet user to manipulate Web page elements using a Web browser. It uses dynamic HTML and does not require complex scripting or programming. We use data binding in web pages that contain interactive components such as forms, calculators, tutorials, and games. Incremental display of a webpage makes data binding convenient when pages have an enormous amount of data. 

    Angular uses the two-way binding. Any changes made to the user interface are reflected in the corresponding model state. Conversely, any changes in the model state are reflected in the UI state. This allows the framework to connect the DOM to the Model data via the controller. However, this approach affects performance since every change in the DOM has to be tracked. 

4. What are Single Page Applications (SPA)?
    Single-page applications are web applications that load once with new features just being mere additions to the user interface. It does not load new HTML pages to display the new page's content, instead generated dynamically. This is made possible through JavaScript's ability to manipulate the DOM elements on the existing page itself. A SPA approach is faster, thus providing a seamless user experience. 

5. Differentiate between Angular and AngularJS
    The following table depicts the aspects of Angular vs AngularJS in detail:
      
    Routing

    @routeProvider is used to provide routing information

    @Route configuration is used to define routing information
    
6. What are decorators in Angular? 
    Decorators are a design pattern or functions that define how Angular features work. They are used to make prior modifications to a class, service, or filter. Angular supports four types of decorators, they are:

    Class Decorators
    Property Decorators
    Method Decorators
    Parameter Decorators


7. Mention some advantages of Angular.
    Some of the common advantages of Angular are - 

    MVC architecture - Angular is a full-fledged MVC framework. It provides a firm opinion on how the application should be structured. It also offers bi-directional data flow and updates the real DOM. 
    Modules: Angular consists of different design patterns like components, directives, pipes, and services, which help in the smooth creation of applications.
    Dependency injection: Components dependent on other components can be easily worked around using this feature. 
    Other generic advantages include clean and maintainable code, unit testing, reusable components, data binding, and excellent responsive experience.
 

    Updated URL routing
    Deprecated APIs - Angular 10 has several deprecated APIs.
    Bug fixes - With this Angular 10 version, there have been a number of bug fixes, important ones being the compiler avoiding undefined expressions and the core avoiding a migration error when a nonexistent symbol is imported.
    New Default Browser Configuration - Browser configuration for new projects has been upgraded to outdo older and less used browsers. 

9. What are Templates in Angular?
    Angular Templates are written with HTML that contains Angular-specific elements and attributes. In combination with the model and controller's information, these templates are further rendered to provide a dynamic view to the user.

10. What are Annotations in Angular?
    Annotations in Angular are used for creating an annotation array. They are the metadata set on the class that is used to reflect the Metadata library.

11. What are Directives in Angular?
    Directives are attributes that allow the user to write new HTML syntax specific to their applications. They execute whenever the Angular compiler finds them in the DOM. Angular supports three types of directives.  

    Component Directives
    Structural Directives
    Attribute Directives 

12. What is an AOT compilation? What are its advantages?
    The Ahead-of-time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript code during the build phase, i.e., before the browser downloads and runs the code.

    Some of its advantages are as follows. 

    Faster rendering
    Fewer asynchronous requests
    Smaller Angular framework download size
    Quick detection of template errors
    Better security

13. What are Components in Angular?
    Components Heirarchy

    Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out into other components creating a hierarchy.

14. What are Pipes in Angular? 
    angular pipes

    Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding. Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs. 

    Some key features include: 

    Pipes are defined using the pipe “|” symbol. 
    Pipes can be chained with other pipes.
    Pipes can be provided with arguments by using the colon (:) sign.

15. What is the PipeTransform interface?
    As the name suggests, the interface receives an input value and transforms it into the desired format with a transform() method. 
    It is typically used to implement custom pipes.

    import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
      name: 'demopipe'
    })

    export class DemopipePipe implements PipeTransform {
      transform(value: unknown, ...args: unknown[]): unknown {
        return null;
      }
    }

What are filters in Angular? Name a few of them.
    Filters are used to format an expression and present it to the user. They can be used in view templates, controllers, or services. Some inbuilt filters are as follows. 

    date - Format a date to a specified format.
    filter - Select a subset of items from an array.
    Json - Format an object to a JSON string.
    limitTo -  Limits an array/string, into a specified number of elements/characters.
    lowercase - Format a string to lowercase.

 





 */