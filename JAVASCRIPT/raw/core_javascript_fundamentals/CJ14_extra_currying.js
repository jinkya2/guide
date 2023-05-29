/**
 * 
 * Currying
 * Transoformation of function with multiple arguments into several functions of 
 * single argument in sequence.
 * 
 * Two Ways
 * 1. bind method
 * 2. function closures
 */

// BIND METHOD

let bind_method_multiply = function (x,y){
    console.log(x*y);
}

let bind_method_multiplyBy2 = bind_method_multiply.bind(this, 2);

bind_method_multiply(7, 8);
bind_method_multiplyBy2(12);

// CLOSURE METHOD

let closure_method_multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let closure_method_multiplyBy2 = closure_method_multiply(2);

closure_method_multiply(7)(8);
closure_method_multiplyBy2(12);


// EXAMPLE -n number sum

let nFun = function(x){
    return function(y){
        if(y){
            return nFun(x+y);
        }else{
            return x
        }
    }
}

console.log(nFun(1)(2)(3)(4)());