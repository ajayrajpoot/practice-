/**
 * Architecture
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

 */