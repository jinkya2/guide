// PROMISE APIs

const promise1 = new Promise((resolve, reject) => {resolve('promise 1')});
const promise2 = new Promise((resolve, reject) => {resolve('promise 2')});
const promise3 = new Promise((resolve, reject) => {resolve('promise 3')});

// Promise.all()
/**
 * ALL or NOTHING
 * Many promises to execute parallely nd wait until all of them are ready. 
 * The order of the resulting array members will be same as in its source promises.
 * If any of the promise rejected, then promise returned by Promise.all will be rejected with error.
 * 
 */
Promise.all(
    [promise1, promise2, promise3]
).then(message=>{
    console.log(message)
}).catch(error=>{
    console.log(error);
})


// Promise.allSettled
/**
 * In Promise.all if any one rejected, the Promise.all rejects with an error, BUT in
 * Promise.allSettled, it waits for each one to execute and retuns 
 * final array of object with error or success for each promise.
 * - {status:"fulfilled", value:result}
 * - {status:"rejected", reason:error}
 */

// Promise.race
/**
 * Waits only for the first settled promise and gets its result (or error).
 * 
 */

// Promise.any
/**
 * waits only for the first fulfilled promise and gets its result
 * 
 */

// 