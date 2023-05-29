// Example 1
/*
let name1 = {
    fName: "Ajinkya",
    lName: "Narwade",
    printFullName: function(){
        console.log(`${this.fName} ${this.lName}`)
    }
}

let name2 = {
    fName: "Sachin",
    lName: "Tendulkar"
}

name1.printFullName();
name1.printFullName.call(name2); // function borrowing
*/














// Example 2
let name1 = {
    fName: "Tara",
    lName: "Singh",
}

let printFullName = function(city, state){
    console.log(`${this.fName} ${this.lName} from ${city} ${state}`)
}

let name2 = {
    fName: "Ashraf",
    lName: "Ali"
}

let name3 = {
    fName: "Sakina",
    lName: "Ali"
}

printFullName.call(name1, "Amritsar", "Hindustan");
printFullName.apply(name2, ["Lahore", "Pakistan"]);

let printSakina = printFullName.bind(name3, "Amritsar", "Hindustan");
printSakina();

/**
 * Definition
 * 
 * CALL
 * FUNCTION.call(thisArg, arg1, arg2, ..., argN)
 * Immediately called
 * 
 * APPLY
 * FUNCTION.apply(thisArg, [argArray])
 * Immediately called, same as call only difference is array
 * 
 * BIND
 * FUNCTION.bind(thisArg, arg1, arg2, ..., argN)
 * Creates a new function to be utilised later.
 * 
 */