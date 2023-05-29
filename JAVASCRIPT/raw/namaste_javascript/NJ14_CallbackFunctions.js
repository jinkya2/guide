// What is a callback function in JavaScript?
    // Take a function and pass it into another function
    // JavaScript is synchronous, single threaded language(doing one thing at a time 
    //          in a specific order) 
    // but with the help of callback functions, we can achieve asynchronous behaviour.

    setTimeout(function(){
        console.log('timer')
    }, 3500)

    function x(y){
        console.log(x.name);
        y();
    }

    x(function y(){
        console.log(y.name);
    })

// JavaScript is a synchronous and single threaded language

// Blocking the main thread

// Power of callbacks?

// Deep about event listeners

// Closures demo with event listeners
  
// Scope demo with Event listeners

// Garbage collection and removeEventListener


// Look at the example folder 