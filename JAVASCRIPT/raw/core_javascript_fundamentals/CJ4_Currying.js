/** 
 * Currying
 * Transforming function with multiple arguments into several functions of single argument 
 * in sequence.
*/

// Way 1 (with bind method)
function multiple1(x, y){
    console.log(x*y);
}

let multiplyByTwo =  multiple1.bind(this, 2);

multiplyByTwo(11);


// Way 2 (with closures)

let multiple2 = function (x){
    return function (y){
        console.log(x*y);
    }
}

let multiplyByFive = multiple2(5)
multiplyByFive(11);


// Infinite Currying

function add(a){
    return function(b){
        if(b){return add(a+b)}
        return a;
    }
}

console.log(add(1)(2)(3)(4)());