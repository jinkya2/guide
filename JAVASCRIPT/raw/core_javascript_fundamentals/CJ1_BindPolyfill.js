/**
 * Bind Method
 * 
 * FUNCTION.bind(this, arg1, arg2, ...argN)
 * 
 * Example

    let object1 = {
        fName: 'ajinkya',
        lName: 'narwade'
    }

    function sayHello(greeter){
        console.log(`Hello ${this.fName} ${this.lName} from ${greeter}`)
    }

    let sayH = sayHello.bind(object1, 'Htfjf');
    sayH();
 * 
 * 
 */

let object1 = {
    fName: 'tara',
    lName: 'singh'
}

function says(statement, recipient){
    console.log(`${recipient}, ${statement} said ${this.fName} ${this.lName}`);
}

Function.prototype.myBind = function(...args){
    // this => object
    let thisObj = this,
    params = args.slice(1);
    return function(...arg2){
        thisObj.apply(args[0], [...params, ...arg2]) //thisObj.apply(args[0], params) //thisObj.call(args[0])
    }
}

let greet = says.myBind(object1, 'ye siyasi khel kyu khel rahe ho aap');
greet('ashraf ali')