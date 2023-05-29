console.log("block scope and shadowing");
/**
 * Notes
 * Block = { A block AKA Compound Statement } = A group of multiple statements
 *
 * Block Scope - Accessing identifiers inside the block.
 *
 * Shadowing - Same named variable outside the scope,
 *
 */

/**
 * Example 1
 * SCOPES { Block {b: undefined c: undefined}  Global {a: undefined} }
 * let and const declarations are in block scope, acccessing them outside ReferenceError: b is not defined
 */

 console.info(`example 1`);
{
    var a = 10;
    let b = 20;
    const c = 30;
}

/**
 * Example 2
 * Shadowing - Same named variable outside the scope. In below example b is shadowing.
 * Scopes { Block: {b: undefined, c: undefined}, Script: {b: undefined},  Global: {a: undefined} }
 * */

 console.info(`example 2`);
var p = 100;
let q = 200;
{
    var p = 10;
    let q = 20;
    const r = 30;
    console.log(p);
    console.log(q);
}
console.log(p);
console.log(q);

/**
 * Example 3
 * Illegal Shadowing - If you shadow a outside let with inside var scope, it will result in SyntaxError
 * Basically var are function scoped, let and const are block scoped. And with declration context they will be available.
 * */
 console.info(`example 3 A`);
let m = 10;
{
    // var m = 500; // Uncaught SyntaxError: Identifier 'm' has already been declared
}

// The declrations should not cross its scope boundaries, the below shadowing is legal
console.info(`example 3 B`);
let a1 = 100;
console.info(a1);
function x(){
    var a1 = 500;
    console.info(a1);
}
console.info(a1);
x();
console.info(a1);

console.info(`example 3 C`);
var a3 = 11;
function one() {
  var a3 = 12;
  console.info(a3);
}

function two() {
  var a3 = 13;
  console.info(a3);
}

one();
two();
console.info(a3);