console.log('script loaded');

let debounceFunction = (fn, delay)=>{
    let timerId;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn.apply(context, args);
        }, delay)
    }
}

let wapperFunction = debounceFunction(()=>{console.log(`API called`)}, 200)