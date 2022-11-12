// event emitur is used to raise and handle custom event

const events = require('events');

let em = new events.EventEmitter();


let myEventListener = (data)=>{
    console.log("my fun--->", data);
}

em.on('FirestEvent',myEventListener ); // ctreate lisner
// ev.on('FirestEvent',myEventListener );


em.emit('FirestEvent', {a1:'data'});// listener is invoked or event is listning
em.emit('SecondEvent');// listener is not invoked or event is not listning, ther is no SecondEvent


// em.removeListener('FirestEvent' , myEventListener); // remove single listener
em.removeAllListeners() // remove all listener
em.emit('FirestEvent', {a1:'data'});// listener is invoked or event is listning
