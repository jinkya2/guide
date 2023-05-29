const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// If we click a child element, it also invokes event listener functions of parents, 
// as technically we click all of them!
// By default all events are bubbling! ELEMENT.addEventListener('click', functionName, {capture: false})
//
// The process of going from closest element to furthest element is called bubbeling.
// Capturing happens from outside to inside.
// To activate capture {capture: true}
// 
// Always create a separate named function block and then pass it into addEventListener, 
// if you want to remove it later, cause definiton will always be treated differently!
// eg_ ELEMENT.removeEventListener("click", functionName)

// For stopping propagation, use e.stopPropagation(), 
// it will stop bubbling or capturing whenever went through it. BUT it works with bubble out,
// THINK again how, if a child have e.stopPropagation and all event listeners are in capture mode
// ie {capture: true}, then capturing will happen first from parent elements, thus it will not
// be able to stop the capturing/ trickling in this case.


// CODE 1


grandparent.addEventListener('click', (e)=>{console.info('grandparent capture')}, {capture: true});
grandparent.addEventListener('click', (e)=>{console.info('grandparent bubble')});

parent.addEventListener('click', (e)=>{console.info('parent capture')}, {capture: true});
parent.addEventListener('click', (e)=>{console.info('parent bubble')});

child.addEventListener('click', (e)=>{console.info('child capture')}, {capture: true, once: true});
child.addEventListener('click', (e)=>{console.info('child bubble')});

document.addEventListener('click', (e)=>{console.info('document capture')}, {capture: true});
document.addEventListener('click', (e)=>{console.info('document bubble')});








// CODE 2
/*
grandparent.addEventListener('click', (e)=>{console.info('grandparent capture')}, {capture: true});
grandparent.addEventListener('click', (e)=>{console.info('grandparent bubble')});

parent.addEventListener('click', (e)=>{console.info('parent capture')}, {capture: true});
parent.addEventListener('click', (e)=>{console.info('parent bubble')});

child.addEventListener('click', (e)=>{console.info('child capture')}, {capture: true, once: true});
child.addEventListener('click', (e)=>{e.stopPropagation();console.info('child bubble')});

document.addEventListener('click', (e)=>{console.info('document capture')}, {capture: true});
document.addEventListener('click', (e)=>{console.info('document bubble')});
*/









// CODE 3


/** 
// EVENT DELEGATIOn
// If you add event listeners to all the divs, then if a div is created later on in DOM, 
// it will not have the event listener attached to it.

// const divs = document.querySelectorAll('div');
// divs.forEach(div=>{ div.addEventListener('click', e=>{console.info('div clicked')})})

const newDiv = document.createElement("div");

// !Caution, the below style will replace all the element CSS with the new CSS string we provided
// If you need to append new styles, use [elementDOM].style.[propertyName_like_width]=200px
newDiv.style.cssText=` 
    width: 200px;
    height: 200px;
    background-color: cyan;
    margin-left: 10px;
`

document.body.append(newDiv);

const globalEventListener = (eventType, targetDOM, cbFunction)=>{
    document.addEventListener(eventType, e=>{
        if(e.target.matches(targetDOM)){cbFunction(e)}
    })
}

globalEventListener('click', 'div', function(e){
    console.info('div clicked');
})

*/