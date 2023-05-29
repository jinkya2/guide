console.log("throttle script loaded");

let counter = 0;
const expensiveCall = (values) => {
  console.log(`window resized ${counter++} times with ${values}`);
};

const throttleWrapper = (fn, delay) => {
  let flag = true;
  return function () {
      let context = this,
      args= arguments;
    if(flag){
        fn.apply(context, args);
        flag=false;
        setTimeout(()=>{
            flag=true
        }, delay)
    }
  };
};

const betterFunction = throttleWrapper(expensiveCall, 2500);
window.addEventListener("resize", betterFunction("hello"));