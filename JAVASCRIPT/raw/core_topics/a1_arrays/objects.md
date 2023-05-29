// ARRAY
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1, 2, 3, 4, 5, 6];

// const a = alphabet[0];
// const b = alphabet[1];

const [a,, c, ...rest1] = alphabet;

// const newArray = alphabet.concate(numbers);
const newArray = [...alphabet, ...numbers];

function sumAndMultiply(a, b){
    // return [a+b, a*b, a/b];
    return [a+b, a*b];
    
}

const [sum ,multiplication, division= 'no division'] = sumAndMultiply(2, 3);



// OBJECTS

const personOne = {
    name: 'Richard',
    age: 8,
    favouriteFood: 'goat',
    address: {
        city: 'Tadoba',
        state: 'Maharashtra'
    }
};

const personTwo = {
    name: 'Parker',
    age: 16,
    job: {
        company: 'TCS',
        designation: 'ASE'
    },
    address: {
        city: 'Akola',
        state: 'Maharashtra'
    }
};

const {name: firstName, age, favouriteFood = 'notProvided', job: {company}, ...rest2} = personTwo;

// For object concatination, the second object properties overrides values from first object properties
const p1 = {
    name: 'Abc',
    age: 32,
    company: 'Good'
};

const p2 = {
    name: 'Pqr',
    company: 'Bad'
};

const p3 = {...p1, ...p2} // {name: 'Pqr', age: 32, company: 'Bad'}


function printUser({name, company, salary = 0}){
    console.log(`Name is ${name} and company is ${comapny} with salary ${salary}`)
}

printUser(p1);


