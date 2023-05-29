console.log('event listener callback script loaded');

const button = document.getElementById("clickMe")

function initilizeButtonListener(){
    let counter = 0;
    button.addEventListener("click", function(){
        console.log(`button clicked ${counter++}`);
    })
}

initilizeButtonListener();