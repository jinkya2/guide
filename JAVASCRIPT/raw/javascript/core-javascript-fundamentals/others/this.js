console.info(`"this" keyword`);

// SESSION 1
// The object that owns the JavaScript Code.
// The value of this when used in a funcition is the object that owns the function
// When used inside an object, refers to the object.
// This in a web browser is window object
// 
// 
//console.info(this); // object that own js code, for browsers its "Window" object
//console.info(globalThis);


// function one(){ console.info(this) } // window in normal and undefined in "use strict" mode
// let two = ()=>{ console.info(this) } // window in any mode
// one();
// two();


function add(c, d){
    console.info(this.a+this.b+c+d);
    return this.a+this.b+c+d;
}
var obj1 = {a: 11, b: 12};
add.call(obj1, 1, 2);
add.apply(obj1, [1, 2, 3]);





/**
// SESSION 2
// this is a property of an execution context(global, function, or eval) 
// that in non-strict mode is always a reference to an object.

let laptop = {
    brand: `Dell`,
    ram: 16,
    core: `i9`,
    getSpecs: function(){
         //
         // You canr access the parent object properties as variables directly eg_ "brand"
         //
         let storage = 100;
         console.info(`getting specs`);
         console.info(`Storage ${storage}`);
         console.info(`Brand ${laptop.brand}`);
         //
          // But you might have multiple objects so its always preferred to use this keyword to refer the parent object.
          // this represents the current object.
          // Based on which object call the methid, `this` refers to that object!
          // Its behavoiur depends upon runtime binding.
          //
         console.info(`ram ${this.ram}`)
     }
 }
 
laptop.getSpecs(); 

 */