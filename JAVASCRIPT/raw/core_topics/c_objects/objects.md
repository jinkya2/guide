# Objects
- Store keyed Collection of various datatypes and more complex entities.
- syntax
```javascript
let user = new Object(); // object constructor syntax
let user = {}; // object literal syntax

user={
    name: "Ajinkya",    // property/identifier: value
    age: 30,
    "is available": true
};

console.log(user.name);
console.log(user["is available"]);

delete user.age;

let key = "is available";
user[key]=false; // computed property

let fruit = prompt("Which fruit you want to buy? ", "apple");
let bag={
    [fruit]: 12
}

"name" in user; // true

for(let x in user){
    //...
}

```
- Order? Integer properties are sorted, others appear in order of creation.
- Objects are stored and copied by references whereas primitve values are copied as whole values. 
- When an object variable is copied, the reference is copied, but the object itself is not duplicated.
- Shallow Copy or Shallow Cloning
```javascript
let user1 = {name: "U1", value:22}
let user2 = user1;
user1==user2
user2.value=33
user1.name="U2"
console.log(user1); // {name: 'U2', value: 33, a: 1}
console.log(user2); // {name: 'U2', value: 33, a: 1}

let a = {};
let b = {};
a==b; // false
```
- const objects can be modified
```javascript
const user = {
  name: "John"
};
user.name = "Pete";
alert(user.name); // Pete
```
- Copying objects?
    - Object.assign(dest, ..sources);
    - let object2 = {...obj1};
    - !! Above methods works only for primitive value.
- Deep cloning or structured cloning
    - structuredClone method, but dont work for function values. 
    - lodash _.cloneDeep(obj)
    - my own method
```javascript
function deepClone(obj){
    let deepCopy={};

    if(obj===null || typeof obj !== "object"){
        return -1
    }else{
        for(let x in obj){
            if(typeof x === "object"){
                deepCopy[x]=deepClone(x);
            }
            deepCopy[x]=obj[x];
        }
    }
    return deepCopy;
}
```
- functions inside objects are termed as "methods".
```javascript
user={
    sayHi: function(){alert("hello")}
}
```
- the `this`
    - TO access Object, a method can use `this`.
    ```javascript
    let user = {
        name: "Ajinkya",
        hello: function(){
            alert(this.name); // user.name, but its unreliable!
        }
    }
    ```
    - `this` is not bound in JavaScript. 
    ```javascript
    function sayHello(){
        alert(`Hi ${this.name}`)
    }
    let user1 = {name: "Akshay"};
    let user2 = {name: "Shaily"};

    sayHello.bind(user1)();
    sayHello.call(user2);
    sayHello.apply(user2);
    ```
    - Cases
    1. functions
    ```javascript
    function sayHi(){console.log(this)}; // Window{}
    ```
    ```javascript
    'use strict'
    function sayHi(){console.log(this)}; // undefined
    ```
    ```javascript
    let u1={
        f1: function(){console.log(this)},
        f2: ()=>{console.log(this)}
    }
    console.log(u1.f1()); // u1{}
    console.log(u1.f2()); // Window{}
    ```
    ```javascript
    let u2 = {
    f1(){
        let f2=()=>console.log(this);
        f2();
    }
    }
    u2.f1() // u2{}
    ```


## Contructor, operator new
- DRY :: Reusable Code
- The regular {...} syntax can be used if we need to create a single object but if we need to create multiple objects, we can use `constructor method` with `new` operator. 
- Constructor function
    - First letter with capital letter
    - always xecuted with `new` operator.
    ```javascript
    function User(name) {
      this.name = name;
      this.isAdmin = false;
    }

    let user = new User("Jack");

    alert(user.name); // Jack
    alert(user.isAdmin); // false
    ```

## Optional Chaining
```javascript
let user = {};
console.log(user.name.fName); // TypeError
```
- Optional chaining ?. stops the evaluation if the value before `?.` is undefined or null and returns undefined. 
```javascript
let user = {};
console.log(user?.name?.fName); // undefined
```
- `!` Dont overuse, if according to code a variable must exist, then error must be thrown and catch.
- The variable before `?.` must exist
```javascript
console.log(nonExistingVaraable?.property); // ReferenceError
```
- Short Circuiting
    - example
    ```javascript
    let user = null;
    let x = 0;
    user?.sayHi(x++);
    ```
- Null Colescing
  ```javascript
    null/undefined ?? (return RHS operand)
  ```
- Other variant
    - user.method?.() // only execute method if exist
- Only use for safe reading and deleting, `NOT writing !`
    - delete user?.name
    - user?.name = "Ajinkya" // `NO NO NO`

## Property Flags and Descriptors
- `Object.getOwnPropertyDescriptor(objectName)`
- example
```javascript
let user = {
  name: "John"
};
console.log(Object.getOwnPropertyDescriptor(user))
/*
{
    value: "John",      // 
    writable: true,     // value editable, false: read only
    enumerable: true,   // listed in loops
    configurable: true  //  property can be deleted and attributes can be chnaged. 
}
*/
```
- `Object.defineProperty(obj, propertyName, descriptor)`
- example
```javascript
let user = {};
Object.defineProperty(user, "name", {value: "Ajinkya"})
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
{
    value: "Ajinkya",
    writable: false,
    enumerable: false,
    configurable: false
}
*/

Object.defineProperty(user, "age", {value: 29, writable: false})

user.age=333; // Error appears only in strict mode
console.log(user.age); // 29
```
- Non-emurable example
```javascript
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};
for(x in user){console.log(x)}; // name toString
Object.defineProperty(user, "toString", {enumerable: false})
for(x in user){console.log(x)}; // name 
```
- `configurable: false` prevents changes of property flags and its deletion, while allowing to change its value. 
- `Object.defineProperties(obj, {k:{}, k:{}})` 
    ```javascript
    Object.defineProperties(obj,{
        key1: {writable: true, enumerable: true, configurable: true}
    })
    ```
- **Object Sealing**

Method                          Notes  
Object.preventExtensions()      Forbids addition of new properties  
Object.seal()                   Forbids adding or removing properties  
Object.freeze()                 .  
.  
Object.isSealed()               .  
Object.isExtensible()           .  
Object.isFrozen                 .  

## footnote
- To check strict mode
```javascript
var mode = (eval("var __temp = null"), (typeof __temp === "undefined")) ? 
    "strict": 
    "non-strict";
```javascript