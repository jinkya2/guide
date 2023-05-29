console.info('let and const in JS Temporal Dead Zone');

/**
 * Notes
 * 
 * The let and const declarations are hoisted, but differently than var declarations.
 * These are in temporal Dead Zone for time difference between declaration hoisting and initialization.
 * They are declared and hoisted but not assigned any value like undefined in case of var declarations.
 * 
 * Temporal Dead Zone
 * Time between let or const declarations hoisting and initialization.
 * Accessing variable in Temporal Dead Zone will result in ReferenceError
 * The let and const declarations are not stored in window or this objects, they have own scopes. window (global object)
 * 
 * No redlaration of let declarations is allowed like var declarations.
 * 
 * const is even more strciter than let declartion, same as TDZ but with const declaration and initialization needs at the same time AND no re assignemnt is allowed.
 * 
 * TypeError: Assignment of const variable, type const cannot be re assignemnt.
 * SyntaxError: Missing intiaizaer in const declaration / Identifier a has alreqady been declared
 * ReferenceError: JS Engine trying to find specififc identifier but cant access/ found it!
 * 
 * Whenever you need to define a value, which will not change later on, use const, then prefer let AND try to keep var aside!
 * Always put declarations and initialization at the top of the scope (Shrink temporal Dead Zone)
 * 
 * 
 */

/**
 * Example 1
 * 

    console.log(b); // undefined
    //console.log(x); // ReferenceError: x is not defined.
    //console.log(a); // ReferenceError: Cannot access 'a' before initialization
                    // The 'a' declaration is allocated memory 
    let a = 10;
    var b = 100;
    console.log(this); // Window {..., b: 100}
 */


/**
 * Example 2
 * 
let a = 1;
let a = 2; // SyntaxError: Identifier 'a' is already defined.
var a = 12; // SyntaxError: Identifier 'a' is already defined.
 */