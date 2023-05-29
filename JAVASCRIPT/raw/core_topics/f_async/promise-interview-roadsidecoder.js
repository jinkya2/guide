// Promise Combinators
/**
 *
 * Execute more than one promise at the same time.
 *
 * Promise.all([]) :: Run all in parallel, return array of fullfilled,
 *                    if any one fails then it fails complete promise.all
 *
 * Promise.race([]) :: Returns first promise that is fullfilled or rejected.
 *
 * Promise.allSettled([]) :: Returns all even if any one is rejected.
 *
 * Promise.any([]) :: Returns the first fullfilled promise and ignores others.
 *                    If all fails, it will throw an error.
 *
 *
 */

/**
 * Async Await
 *
 *  
 const result = async ()=>{
    try{
        const message1 = await fetch('abc.com');
        const message2 = await fetch('abc.com');
        const message3 = await fetch('abc.com');
        console.log({message1, message2, message2})
    }catch(error){
        console.log(error)
    }
 }

 * 
 */


/**
 * 
 * ANYTHING returned in Chaining(except the promise()) is not reject, 
 * they will be passed to the .then !!
 *  return new Error('error');  // will be passed to next then chain.
 * 
 * throw 'Defeat' is error and passed to the next catch(e){}
 * 
 *  */ 
