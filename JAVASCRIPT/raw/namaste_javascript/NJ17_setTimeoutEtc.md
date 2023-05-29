# setTimeout
- setTimeout does not guarantee thtat callback method will be called exactly after n seconds.
- The problem is if after registering the timer for callback, if the code have suppose million lines coding, its not going to allow the event loop to push the timer callback until its execution finishes.

```javascript
console.log('start');
setTimeout(function cb(){
    console.log('callback after 5000');
}, 5000)
console.log('end');

let startD = new Date().getTime();
let endD = startD;
while(endD<startD+10000){
    endD = new Date().getTime();
}
console.log('while expires');
```

- setTimout(fn, 0); even the zero doesnt matter, it will be still registered. Zero might be useful to defer some code.