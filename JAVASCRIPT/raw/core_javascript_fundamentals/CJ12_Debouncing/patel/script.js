const debounce = (fn, delay)=>{
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            fn(...args);
        }, delay)
    }
}
document.getElementById('myid').addEventListener("click", debounce((e)=>console.log(`clicked`), 2000))
/**
<button id="myid">Click Me</button>
<script src="./script.js"></script>
 */