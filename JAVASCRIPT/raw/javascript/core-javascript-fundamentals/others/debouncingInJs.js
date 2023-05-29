console.info("debouncing script");

let counter = 0;

const getData = ()=>{
    // call an API and get data
    console.info("fetching data ", counter++);
}

const doSomeMagic = (fn, delay)=>{
    return function(){
        setTimeout(()=>{getData()}, delay)
    }
}

const betterFunction = doSomeMagic(getData, 300);

// setTimeOut
console.log('hello');
function bye(){console.log('bye')};
const timeoutID = setTimeout(bye, 3000)
const stopCount1 = ()=>{clearTimeout(timeoutID)}

// setTimeInterval
let count = 0;
const counter1 = ()=>{console.info(count++)}
let intervalID = setInterval(counter1, 1000);
const stopCount2 = ()=>{clearInterval(intervalID)}