# Callback Function
- Callback function!
- In many cases, the callbacks become nested and creates a `pyramid of doom`.
- Thus its best avoided.
- code

```javascript
function ask(booleanQuestion, trueFun, falseFun){
    let result = prompt(booleanQuestion, 1);
    if(Number(result)===1){ 
        trueFun()
    }else{
        falseFun()
    }
};

function A(){
    console.log("Affrimative Response");
}

function B(){
    console.log("Negative Response");
}

ask("How is your mood? Type 1 for good and 0 for bad", A,B);
```

# Promise
- Promise is a special JavaScript Object that links the "producing code" and the "consuming code" together.

new Promise(executor)       
state: pending                  ---resolve("done")--->      state: fullfilled
result: undefined                                           result: "done"

new Promise(executor)       
state: pending                  ---reject(error)--->        state: rejected
result: undefined                                           result: error

- Check example 1t promise1.js
- There can only be a single result or error.
- CHaining promises
  - Always use P.then().then().then().catch() DO NOT USE P.then() P.then() P.then() It will run all those cllbacks simultaneously instead of depending on each other.


# Error Handeling with promise
- The easiest way to catch all errors is to append .catch to the end of chain
- Always use   reject(new Error("Whoops!")) for throwing errors.

```javascript
fetch('https://javascript.info/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));
```

# Promise API
url1 = "abc.com/comments/user/123",
url2 = ''

- Promise.all([])
  - execute in parallel and wait until all are ready
- Promise.allSettled([])
- Promise.race([])
- Promise.any([])
- Promise.resove/reject([])

# Promisification

# Microtasks

# Async/ Await



































