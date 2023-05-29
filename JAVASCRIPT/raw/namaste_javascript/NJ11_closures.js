// Example 1
function x() {
  let a = 1;
  setTimeout(function y() {
      console.log(a);
  });
  console.log('JavaScript waits for nobody');
}

x();



// Example 2
function call1(){
    for(var i=0; i<5; i++){ // change var to let.
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}

call1();



// Example 3
function call2(){
    for(var i=0; i<5; i++){
        function call3(x){
            setTimeout(function(){console.log(x)}, x*1000)
        }
        call3(i);
    }

}
call2();