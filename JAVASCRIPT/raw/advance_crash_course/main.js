//==================================================================
// SCOPE
/**
 * SCOPE
 * Block Scope :: Variables declared inside a pair of curly braces can not be 
 * accessed from outside.
 * Function Scope :: Variables declared inside a function can not be accessed from 
 * outside the function.
 * Global Scope :: Globally scoped variables can be accessed inside block or functions. 
 * 
 */
// EXAMPLE 1
/* 
let a = 10;
function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();
*/

//==================================================================
// CLOSURES
/**
 * CLOSURES
 * MDN
 * The combination of function bundled together with references to 
 * its surrounding state. Closures are created every time a function
 *  is created, at function creation time.
 * Another
 * In JavaScript, when we return a function from another function, we effectively 
 * returning a combination of the function along with the functions scope. This 
 * would let the function definition have an associated persistent memory which 
 * could hold on to live data between execution. That combination of the function 
 * and its scope chian is what is called a closure in JavaScript.
 */
// EXAMPLE 1
/*
function outer(){
    let counter = 10;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner()
}
// With every new invokation of the function a temporary memory is established
// for counter.
outer(); 
outer();
*/

// EXAMPLE 2
/*
function outer(){
    let counter=10;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}

let fn = outer();
fn();
fn();
*/

//==================================================================
// FUNCTION CURRYING
/**
 * FUNCTION CURRYING
 * A process in functional programming in which we transform a function 
 * with multiple arguments into a sequence of nesting functions that 
 * take one argument at a time.
 * f(a,b,c) transformed into f(a)(b)(c)
 */

// EXAMPLE 1
/*
function sum(a,b,c){
    return a+b+c;
}

//sum(1,2,3);

function curryFn(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

let sumCurry = curryFn(sum);
console.log("here ",sumCurry(2)(3)(4));

const add2 = sumCurry(2);
console.log(add2(1)(2));
*/

// EXAMPLE 2
/*
// INFINITE CURRYING WITH RECURSION
function multiplication(a){
    return function(b){
        if(b){
            return multiplication(a*b);
        }
        return a;
    }
}
console.log(multiplication(1)(2)(3)(4)());
*/

//==================================================================
// THIS KEYWORD
/**
 * this keyword
 * Totally determined by How a function is called.
 * 
 * How to determine this
 * 1. Implicit binding
 * 2. Explicit binding
 * 3. New Binding
 * 4. Default Binding
 */

// Implicit Binding
// EXAMPLE 1
/*
let person = {
    name: 'Ajinkya',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName()
*/

// Explicit Binding
/**
 * In JavaScript, evey function have build in methods CALL, APPLY AND BIND for 
 * invoking context with which the function needs to be invoked.
 */
// EXAMPLE 1
/*
let person = {
    name: "George"
}
function sayMyName(){
    console.log(`My name is ${this.name}`);
}

sayMyName.call(person);
//sayMyName.bind(person)();
// sayMyName.apply(person, ["one"])();  // error
*/


// new binding
// Example 1
/*
function Person(name){
    // When a new instance of Person is created, js assigns this={} to the function
    this.name=name;
}
let p1 = new Person("Ajinkya");
let p2 = new Person("batman");
console.log(p1.name, p2.name);
*/

// DEFAULT BINDING
// EXAMPLE 1
/*
//globalThis.name="Ajay"
function sayMyName(){
    //console.log(this);
    console.log(`Name is ${this.name}`);
}
sayMyName(); // Name is undefined; as this refers to global object.
*/

// ORDER OF PRECEDENCE
/**
 1. New
 2. Explicit
 3. Implicit
 4. Default
 */

//==================================================================
// PROTOTYPE
/**
 * Prototypes are the mechanism by which JavaScript objects inherit 
 * features from one another
 * 
 * Share properties and methods across instances.
 */
// EXAMPLE 1
/*
function Person(fName, lName){
    this.firstName=fName;
    this.lastName=lName;
}

const p1 = new Person("Ajay", "Vijay"); // new P(); constructor function
const p2 = new Person("Clark", "Kent");

// NOT Efficient Method :: p1.getFullName = function(){} 
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//console.log(p1.getFullName());
//console.log(p2.getFullName());

function SuperHero(fName, lName){
    Person.call(this, fName, lName);
    this.isSuperHero=true;
}

SuperHero.prototype = Object.create(Person);

SuperHero.prototype.fightCrime=function(){
    console.log("Fights crime");
}

const batMan = new SuperHero('Bruce', 'Wayne');
*/

// Example 2 (much clear)
/**

function Person(fName, lName){
    this.firstName=fName;
    this.lastName=lName;
}

Person.prototype.getFullName=function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperHero=true;
}

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor=SuperHero; // Otherwise JavaScript thinks that its created from Person

SuperHero.prototype.fightCrime = function(){
    console.log('Fights crime');
}

let sh1 = new SuperHero('Bruce', 'Wayne')
sh1.fightCrime()
sh1.getFullName()



 */

//==================================================================
// CLASS
/**
 * Introduced in 2015
 * Prototypal inheritance can be difficult, thus to make it relatable to
 * other languages, class keyword was introduced.
 * 
 * Class are syntactical sugar over prototypal ineritance.
 */
// Example 1
/*
class Person{
    constructor(fName, lName){
        this.firstName=fName;
        this.lastName=lName;
    }

    sayMyName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// const p1 = new Person("Bruce", "Wayne");
// console.log(p1.sayMyName());

class SuperHero extends Person{
    constructor(fName, lName){
        super(fName, lName);
        this.isSuperHero= true
    }

    fightCrime(){
        console.log("Fights crime");
    }
}

let sh1 = new SuperHero("Peter", "Parker")
console.log(sh1.sayMyName());
*/

//==================================================================
// ITERABLES AND ITERATORS - PROTOCOLS
/**
 * Iteration in JavaScript
 * 1. Difficulty in accessing the element.
 * 2. Difficult to manage iteration on the data of various data structures.
 * 
 * There was a need to iterate over various data structures in a new way that
 * abstracts away the complexity of accessing elements one by one and was at
 * the same time uniform across the different data structures.
 * 
 * Many data structures implement iterable protocols by default. String Arrays and
 * maps and sets. Termed as build in iterables. And a new looping construct for
 * of loop was introduced.

    for(const char of str){}
    for(const item of arr){}

 *
An object which implements iterable protocol is called an iterable.
For an object to be an iterable it must implements a method at the key [Symbol.iterator]
That method should not accept any argument and should return an object which conforms to the iterator protocol.

The iterator protocol decides whether an object is an iterator.
The object must have a next() method that returns an object with two properties.
    value :: which gives the current element.
    done :: ehich is  boolean value indicating whether or not there are any more elements that could be iterated upon.
 *       
 */
// EXAMPLE 1
/*
let string = "Ajinkya";
for(let i=0; i<string.length; i++){
    console.log(string.charAt(i));
}

let arr = [1,2,3,4];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
*/

// EXAMPLE 2
// What we are doing below, JS does internally for string, array, maps and sets.
/*
const obj = {
    [Symbol.iterator]: function(){
        let step = 0;
        const iterator = {
            next: function(){
                step++;
                if(step===1){
                    return {value: "Hello", done: false}
                } else if(step==2){
                    return {value: "World", done: false}
                }
                return {value: undefined, done: true}
            }
        };
        return iterator;
    }
}
for(const word of obj){
    console.log(word);
}
*/

//==================================================================
// GENERATOR

function* generatorFunction(){
    yield "Hello"
    yield "World"
}
const generatorObj = generatorFunction(); // Object [Generator] {}

for(const word of generatorObj){
    console.log(word);
}

//==================================================================