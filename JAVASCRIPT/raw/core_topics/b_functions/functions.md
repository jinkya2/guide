## JavaScript Functions

### Concept
- Basic building block in program for modularity
- Syntax (Function Expression)
    ```javascript
  function funcName(parameter1="deafult value", parameter2=someFunction(), ..., parameterN){
      // body
      let variableA;  // block scope
      var variableB;  // function scope
      return something; // by default returns undefined 
  }
  funcName(argument1, argument2, ..., argumentN); // calling function, if arg is not provided, it will be undefined in function operations.
  ```

- Variables declared outside functions are `global variables`.
- Can access and modify outer variables.
- Same name variable declared inside  will shadow the outer one.
- Arguments are passed and parameters are taken.
- The function execution stops at return directive occurance. (Multiple can be used conditionally)
- Without any explicit return, default return is "undefined"
- Functions are actions, so use function names as verbs with accurate and precise description.
- One function, one action.

### Function Expressions

- **Function Declaration** Syntax
```javascript
function funName(){
  // some code
}
```

- **Function Expressions** Syntax
    ```javascript
    let funName = function(){
      // some code 
    }
    ```

- In `strict mode` Function declaration is is only visible inside the code block in which it reside.

```javascript
"use strict"
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
```

- In JavaScript, function is a value. It can be assigned to variables, passed between variables, passed and received as argument and parameter in functions. First Class Support!
- **Callback Functions** The first class support of functions make it useful for callback actions.
- Caution - A function expression is created when the execution reaches it and is usable only from that moment.
            A function declaration an be called earlier than it is defined due to hoisting.
- As a rule of thumb, go for function declarations. For any special circumstances in your code, use function expressions.

### Arrow Functions
- Handy for one liner functions.
- A simple and concise way of creation a function rather than creating function expressions.

  ```javascript
  let fun = (a,b) => expression;
  let sum = (a,b) => a+b;
  let sum = (a,b) => {
    let result = a+b;
    return result;
  }
  ```

### Recursion
- Recursion is a pattern when a task can be split into multiple smaller task of gthe same kind.
- Iteration
```javascript
function powerIteration(x, y){
  let result = 1;
  for(let i=0; i<y; i++){
    result = result * x
  }
  return result;
}
```

- Recursion
```javascript
function powerRecursion(x, y){
  if(y==1){ // base of recursion
    return x;
  }else{ 
    return x* powerRecursion(x, y-1); // recursive step
  }
}
```
- The maximum number of nested calls is called `recursive depth`. Javascript Engine have limitation for it, we can rely for upto 10,000. `Tail Call Optimization` is used for simple cases but not supported eveywhere.

### The execution context and stack
- you know this

### Recursive traversal
- Imagine you have a company object, containing various departments which contains array of employees with thier salaries. If you need the sum of all salaries the iterative approach is not easy cause the structure is not simple. The iterations become nested and ugly.
- code

```javascript
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function totalSalary(obj){
  if(Array.isArray(obj)){
    return obj.reduce((prev, current)=> prev+current.salary, 0);
  }else{
    let sum = 0;
    for(let x of Object.values(obj)){
      sum = sum + totalSalary(x)
    }
    return sum
  }
}
```
### Recursive Structure
- Structure that replicates itself in parts.
- Eg - Above cpmpany object, linked list, HTML DOM, XML etc

### Rest and Spread Parameters
- In old times, `arguments` was used to get arguments of a function params. Though its arry like and iterable, its not actually an array. (Methods like map dont work.) 
- The `arguments` dont work in arrow functions. It tries to take it from outer "normal" function. Arrow functions dont have their own `this`.
- The new standard is `...rest` parameters. If used in conjuction with other params, use it et the end.
- code

```javascript
function hello(name, last, ...salary){
    let sum = 0;
    for(x of salary){
        sum+=x;
    }
    return `${name} ${last} have Rs ${sum} salary.`
}
hello('rakesh', 'shreyas', 12,534,633,35356,2424);
```

- `rest` operator is exactly opposite of `spread`. **rest** takes arguments and convert into array. "Spread" takes an array and converts it into arguments.
- code

```javascript
let array1 =  [1,2,3,-3,-13,99,0];
let array2 =  [12,32,43,-23,-153,919,39];
Math.max(...array1, ...array2);

let array3 = [...array1, ...array2];
```
- A universal method to convert into an array is Array.from(obj)

### Block Scope
- The `let` declaration is only accessible in {block scope}. The {}, for, do...while etc. 

### Lexical Environment
- Refer `namaste javascript notes`

### The old "var"
- Do noy use in new scripts, only know it to know how old scripts works.
- var is function scoped. It pierces through if, for, while etc.
- var tolerates re-declarations.
- Can be declred below their use(hoisting)!! let dont allow usage before declaration.

```javascript
function sayHi() {
  phrase = "Hello";
  alert(phrase);
  var phrase;
}
sayHi();
```
- Only declarations are hoisted.

```javascript
function sayHi() {
  alert(phrase);
  var phrase = "Hello";
}
sayHi();
```
- To bypass the odd behaviour of `var` programmers invented IIFE(immediately invoked function expression). Created, immediately executed and have own private variables.

### Global Object
- Language environment have built-in global object. In browser its called `window` and in nodejs, its called `global`. Recently ECMAScript added `globalThis`, to standaridise the name.
- But dont rely on it, as modern ECMA modules dont support it.

```javascript
  var gVar = 11;
  let gLet = 12;
  console.log(window.gVar); // 11
  console.log(window.gLet); // guess
```
- If you really want to make a global variable, just `window.user = "Ajinkya"`
- Using global variables is generally discouraged. Its mostly used for polyfills- `if(!window.Promise){console.log('Browser sont support promise')}`


### New Function
- `let func = new Function([arg1, arg2, ..argN], functionBody)`
- eg

```javascript
  let sum = new Function('a', 'b', 'return a+b');
  sum(11, 12); // 23
```
- Very specific use cases, if we receive a code string from server to execute it directly Function('string').
- The function created with `new Function` dont have reference to curent lexical environment, but it have referenec to global environment. Think why it should have access? As its coming from outer source!
- code

```javascript
function getFunc() {
  let value = "test";
  let func = new Function('alert(value)');
  return func;
}
getFunc()(); // error: value is not defined
```

### Scheduling a call
- setTimeout
- setInterval
- setTimeout()
  - setTimeout(func/code, time milliseonds, ...args)
  - You can pass a string "alert('hello')" and the setTimeout will run it as function BUT NOT RECOMMENDED. Instead use a function. And pass a function defintion, do not run it!
  - code
  ```javscript
  setTimeout(()=>alert('hello'), 1000);
  ```
  - Canceelling with clearTimeout(timerId)
  ```javascript
  let timerId = setTimeout(() => alert("never happens"), 1000);
  alert(timerId); // timer identifier
  clearTimeout(timerId);
  alert(timerId); // same identifier (doesn't become null after canceling)
  ```
- setInterval
  - setInterval(func/code, time milliseconds, ...args)
  - same as setTimeout, except it runs regulargly after period of time.
  - code
```javascript
    // repeat with the interval of 2 seconds
    let timerId = setInterval(() => alert('tick'), 2000);

    // after 5 seconds stop
    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```
- zeero deelay settimeout
  - So the function is scheduled to run “right after” the current script.
  - code
```javascript
setTimeout(() => alert("World"));
alert("Hello");
```
### memoization
- “Memoization is an optimization technique where expensive function calls are cached such that the result can be immediately returned the next time the function is called with the same arguments”. — Jonathan Lehman, JavaScript Function Memoization.
- Memoization can only be useed with `pure function` - function whose output never changes for the same input.
- Based on Higher Ordeer Functions and Closures.
- code
```javascript
function recursiveFactorial(n){
    if(n==0){
        return 1;
    }else{
        return n*recursiveFactorial(n-1);
    }
}
function memoizedDecorator(fn){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n];
        }else{
            let result = fn(n);
            cache[n]=result;
            return result;
        }
    }
}
```

### call, apply, bind
- Suppose you have an array of a large objects with different metadata and if you want to have meethods on them, its not wise to list the methods in each object. So you can have a common method and use it with different objects.
- The call and apply methods executes immediately, whereas bind methods returns the code for execution.
- code

```javascript
let name1 = {
  fName: 'ajinkya',
  lName: 'narwade'
};

let name2 = {
  fName: 'sachin',
  lName: 'tendulkar'
}

function sayHi(city, state){
  console.log(`${this.fName} ${this.lName} says  Hello from ${city}, ${state}`)
}

sayHi.call(name1, 'akola', 'MH');

// The only difference between call and apply is calling the arguments. 
sayHi.apply(name2, ['mumbai', 'MH']);

const greetMe = sayHi.bind(name1, 'nagpur', 'MH');
greetMe();
```

### Function Currying
- with bind
- code
```javascript
let multiple = function(x,y){
    console.log(x*y);
}

let multipleByTwo = multiple.bind(this, 2);
multipleByTwo(5)
```
- with closures
- code
```javascript
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

multiply(2)(3)
```


### Arraow function revisited
- Arrow functions dont have their own `this`, they take `this` from outside.
- Basically dont have own context and rely on outer context.
- code

```javascript
'use strict'
console.log('hello');

this.name = 'Global Nivas';

this.house1 = {
    name: 'Heaven Nivas'
}

let house2 = {
    name: 'Hell Nivas'
}

function cleanHouse1(soap){
    function cleanWithSoap(_soap){
        console.log(`${this.name} is cleaned with ${_soap}`);
    }
    cleanWithSoap(soap);
}

function cleanHouse2(soap){
    const cleanWithSoap = (_soap)=>{
        console.log(`${this.name} is cleaned with ${_soap}`);
    }
    cleanWithSoap(soap);
}

// cleanHouse1.call(this.house1, 'Washer505'); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
cleanHouse2.call(house2, 'Washer506'); // Hell Nivas is cleaned with Washer506
```














