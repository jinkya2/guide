console.info('closures');
/**
 * Notes
 * The scope is a policy that manages the accessibility of variables, and function declarations inside a particular execution context.
 * Lexical - Hierarchy in a sequence.
 * Closure is function bind together with its lexical environment. Function bundled with lexical scope forms a closure.
 * MDN - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 */


/**
 * Example 1
 * 
 */
// While trying to find a, y have closure of x!
/*
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
*/

/**
 * Example 
 * functions tyanchya maherala sodun jari gele tari te mahercha prem sobat gheun jatat. Lexical Scope Bindings ;)
 * When function x returns y, it not only retuns y but also lexical scope(variable references, not values!!!) with it.
 */
/*
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y; // same as-> return function y(){...}
}
var z = x();
z();
*/

// gotchq cases 1, rememebr references to a is rememberred, not the value!
/*
function x(){
    var a = 77;
    function y(){
        console.log(a);
    }
    a = 88;
    return y;
}
var z = x();
z();
*/

// gotchq cases 2, The function y while returning have closure (y) and closure (z) with it! 
/*
function z(){
    var z1 = 77
    function y(){
        var y1 = 88;
        function x(){
            console.log(y1, z1);
        }
        x();
    }
    y()
}
z()
*/


// Use Cases
/**
 * 1. Module Design Pattern
 * 
 * 
 * 2. Currying
 * Transformation of functions from callable as f(a, b, c) into callable as f(a)(b)(c)
 * Allows to create partial functions based on existing function.
 * 
 function normalAdder(a,b){
    return a+b;
}

function curryAdder(a){
    return function(b){
        return a+b;
    }
}

let twoAdder = curryAdder(2);

twoAdder(5)
 * 
 *
 *
 * 3. Functions like once
 *  // refer - https://sking7.github.io/articles/654734132.html
 *  function onceRunWrapper(fn, context){
 *   var result;
 *   return function(){
 *       if(fn){
 *           reult = fn.apply(context || this, arguments);
 *           fn = null;
 *       }
 *       return result
 *   }
 *  }
 * 
 * var canOnlyUseOnceFn = onceRunWrapper(function(){console.log("Fired")})
 * 
 * 
 * 
 * 4. memoize
 * Memoization is a top-down, depth-first, optimization technique of storing previously 
 * executed computations. 
 * Whenever the program needs the result of these computations, the program will not have to 
 * execute that computation again. Instead, it will reuse the result of the previously executed 
 * computation. This way the program will not have to repeat expensive computations. 
 * [link](https://www.section.io/engineering-education/an-introduction-to-memoization-in-javascript/)
 * 
 * 5. maintaining state in sync world
 * 6. setTimeouts
 * 7. Iterators
 * 8. and many more...  
 */