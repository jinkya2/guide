console.log('call apply bind');

// never use 'name' as identifier in global context, as name as special meaning in global context
// Normally we dont provide methods inside an object, as it will be less modular!
let person1 = {
    firstname: 'ajinkya',
    lastname: 'narwade',
    printFullName(city, state){
        console.log(`${this.firstname} ${this.lastname} from ${city} ${state}`)
    }
}
person1.printFullName();

// function borrowing!
let person2 = {
    firstname: 'Sachin',
    lastname: 'Tendulkar'
}
person1.printFullName.call(person2, 'Mumbai');

// The only difference between call and aply is the second argument, 
// apply takes second argument as array of arguments
person1.printFullName.apply(person2, ["Akola", "Maharashtra"])

// Now call and apply are immediately invoked, but if you want to 
// bind the object to the functions and later on invoke it, then bind is useful

let person3 = {firstname: 'kamal', lastname: 'naman'};
let person3FullName = person1.printFullName.bind(person3, 'Rampur', 'Mahishmati');
person3FullName();

let person4 = {};

console.log()