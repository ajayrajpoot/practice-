/*
HTML elements receive different types of events, from click, to blur, to scroll, and so on.

One behavior these events have in common is Event Bubbling. I'll explain what this behavior means in this article.

I also made a video version of this article which you can watch here.

What is Event Bubbling?
    Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

    This is the default behavior of events on elements unless you stop the propagation */