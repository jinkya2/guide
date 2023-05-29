/*
What is closure?
A function along with its outer environment.
Combination of  a function and its lexical scope bundlede together. 
Even when a function is executed in another scope instead of its original scope, 
it still remmebeers its outer lexical environment.

Advantages of closures
- module pattern
- function currying
- memoize, once
- data hiding/ encapsulation

Disadvantages of closures
- overconsumption of memory, consumes a lot of variables as sometimes those 
variablees are not garbage collected, and can also lead to memory leak.

*/

// Example 1
/*
function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
outer()();
*/


// EExample 2
/*
function counter(){
    let count = 0;
    return function incrementCounter(){
        count++;
        console.log(count)
    }
}

let counter1 = counter();
counter1();
counter1();

*/


// Example 3

function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    };
    this.decrementCounter = function(){
        count--;
        console.log(count);
    };
}

var counter1 = new Counter() // DO NOT WORK -> var counter1 = counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();