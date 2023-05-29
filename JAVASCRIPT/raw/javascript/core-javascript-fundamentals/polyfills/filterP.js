/**
 * Definition
 * Returns a new array consisting of elements passing the function test
 * Syntax
 * Array.filter(function(element, index, array){...}, thisContext)
 * 
 */

// Even number%2===0

Array.prototype.customFilter = function(callback, context){
    const result = [];
    for(let i=0; i<this.length; i++){
        if(callback.call(context, this[i], i, this)){
            result.push(this[i])
        }
    }
    return result;
}

let array1 = [1,2,3,4,5,6]
const even = array1.customFilter(function(e){
    return e%2===0
})

console.info(even);




/**
 * COPY
 *
 * Array.filter(function(element, index, array){...}, thisContext)
 *  
 * Array.prototype.customFilter = function(callback, context){
    const result = [];
    for(let i=0; i<this.length; i++){
        if(callback.call(context, this[i], i, this)){
            result.push(this[i])
        }
    }
    return result;
}
 */