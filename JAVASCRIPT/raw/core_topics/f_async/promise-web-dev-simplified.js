/** 
 * VIDEO PROMISES
let p = new Promise((resolve, reject)=>{
    let error = true;
    if(error){
        reject('error')
    }else{
        resolve('success')
    }
})

p.then((value)=>{
    console.log(`Then ${value}`)
}).catch((value)=>{
    console.log(`Catch ${value}`)
})

*/



// How To Create Your Own Implementation Of JavaScript Promises
// https://youtu.be/1l4wHWQCCIc
// not interested