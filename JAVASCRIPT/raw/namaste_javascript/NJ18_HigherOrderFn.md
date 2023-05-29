# Higher Order Function
- A function which takes another fn as arg or returns a fn, is know as HOD.

```javascript
function x(){
    console.log("Hello");
}

function y(x){      // Here y is Higher Order Function
    x();            // callback function
}
```


# Example
// Array of Radius of Circle's. Now calculate and return area, circumferance and diameter radius.

const radius = [3,1,2,4];

const calculateArea = function (radius){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const calculateCircumference = function (radius){
    let output = [];
    for(let i=0; i< radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output;
}

const calculateDiameter = function (radius){
    let output = [];
    for(let i=0; i< radius.length; i++){
        output.push(2* radius[i])
    }
    return output;
}


BUT WE MUST USE DRY (DONT REPEAT YOURSELF) PRINCIPLE!

const area = function(radius){
    return (Math.PI * radius * radius)
};
const circumference = function(radius){
    return (2 * Math.PI * radius)
};
const diameter = function(radius){
    return (2 * radius)
};

// If you think, the below function is actual polyfill of map with some missing checks
// And if you want to use it exactly like map A.map, use Array.prototype.calculate = fn(){}
const calculate = function (radius, logic){
    let output = [];
    for(let i=0; i< radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

Functional programing is a big concept utitlizing code modularity, reusability, passing fn in diff functions.