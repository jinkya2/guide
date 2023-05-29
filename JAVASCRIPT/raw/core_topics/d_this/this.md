*Refer Namaste JavaScript Notes*



- Wife says to husband lets renovate this house. this means the house they are currently residing. Similarly in JS, this refers to the current owner object with some exceptions.
- codee

```javascript
'use strict'
// house
this.table = "window table";

const cleanTable = function(soap){
    // if nested functions?

    // approach 1
    
        let that = this;
        const innerFunction = function(_soap){
            //console.log(this) 
            console.log(`cleaning ${that.table} using ${_soap}`);
        }
        innerFunction(soap);
    

    // approach 2
    /*
        const innerFunction = function(_soap){
            console.log(`cleaning ${this.table} with ${_soap}`)
        }
        innerFunction.call(this, soap); // innerFunction.call(this)(soap);
    */
    
    // approach 3
        const innerFunction = (_soap)=>{
            console.log(`cleaning ${this.table} with ${_soap}`);
        };
        innerFunction(soap);
}


this.garage = {
    table: "garage table"
}

let johnsRoom = {
    table: 'johns table'
}

//cleanTable(); // Cannot read property of undefined.
// call fn to resuce
cleanTable.call(this, 'soap1');
cleanTable.call(this.garage, 'soap2');
cleanTable.call(johnsRoom, 'soap3');
```

