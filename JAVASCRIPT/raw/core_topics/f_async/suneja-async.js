function promise1(){
    console.log('Promise 1 Function');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve("promise 1 resolved");
            reject("promise 1 rejected");
        },3000)
    })
}

function promise2(){
    console.log('Promise 2 Function');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Promise 2 resolved");
            reject("Promise 2 rejected");
        },2000)
    })
}

promise1().then(function(response){
    console.log(response);
    promise2().then(function(response){
        console.log(response);
    })
})