console.info(`map polyfills`);
/**
 * Definition
 * Array method creating a new array populated with the results of the calling function.
 * Syntax
 * Array.map(function(element, index, array){...})
 */


let array1 = [1,2,,'string1',true];

const p = array1.map(function(e,index){
    //console.log(typeof e);
    return e*index;
});
console.info(p);

console.log('- - -');

let array2 = [1,2,,'string1',true];

Array.prototype.customMap = function(cb){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(this.indexOf(this[i])>-1){
            result[i]=cb(this[i], i, this);
        }
    }
    return result;
}

Array.prototype.kfilter = function(cb){
    let sum = [];
    console.info(sum);
}

let r = array2.customMap(function(element, index, array){return element*index;})
console.info(r);

/**COPY
 * 
 * Array.map(function(element, index, array){...})
 *  
   Array.prototype.customMap = function(cb){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(this.indexOf(this[i])>-1){
            result[i]=cb(this[i], i, this);
        }
    }
    return result;
}
 *
 *
 */
