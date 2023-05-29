/**
 * sum(1)(2)(3)...(n)()
 * 
 * In JavaScript, functions are first class objects, ie it can 
 * be treated as any other variable, pass to or return from function,
 * or even assign to a variable.
 */

// sum()()(9)

// Normal Function
let sum1 = function(a){
    return function(b){
        if(b){
            return sum1(a+b)
        }
        return a;
    }
}

let result = sum1(1)(2)(3)(4)()
console.log(result);

// Fat Arrow Function
let sum2 = a=>b=>b?sum2(a+b):a;
console.log(sum2(1)(2)(3)(4)());