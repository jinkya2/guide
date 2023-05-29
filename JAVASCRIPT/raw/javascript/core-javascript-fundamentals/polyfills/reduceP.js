/**
 * Definition
 * Returns a value running across all elements through a user function with initial set value.
 * Syntax
 * Array.reduce(function(previousValue, currentValue, index, array){...}, initialValue)
 */

const array = [1,2,3,4,5,6, -1];

function largest(prev, next){
    return Math.max(prev, next);
}

const reducedValue = array.reduce(largest);
console.info(reducedValue);


Array.prototype.customReduce = function (callback, startingValue) {
    // as starting value is an optional param
    // make a check
    let accumulator = startingValue || undefined;
    for (let index = 0; index < this.length; index++) {
      if (accumulator) {
        accumulator = callback.call(accumulator, accumulator, this[index], index, this)
      } else {
        accumulator = this[index]
      }
    }
    return accumulator;
  }

let array2 = [1,2,3,4];
function largestValue(prev, next){
    return Math.max(prev, next);
}
let maxValue = array2.customReduce(largestValue,99);
console.info(maxValue);

/**
 * COPY
 * 
 * Array.reduce(function(previousValue, currentValue, index, array){...}, initialValue)
 * 
 * Array.prototype.customReduce = function (callback, startingValue) {
    // as starting value is an optional param
    // make a check
    let accumulator = startingValue || undefined;
    for (let index = 0; index < this.length; index++) {
      if (accumulator) {
        accumulator = callback.call(accumulator, accumulator, this[index], index, this)
      } else {
        accumulator = this[index]
      }
    }
    return accumulator;
  }
 */

console.log([1,[2,[3,[4,5]]]].flat())