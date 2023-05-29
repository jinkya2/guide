/**
 * SET
 * 
 * Set of values where each value can occur only once
 * Collection of unique calues
 * Adding same value will not throw error and will not be added.
 * 
 * new Set()
 * new Set([1,2,3,1,2,4,5]); // Set(5) {1, 2, 3, 4, 5}
 * 
 * SET.add(value)
 * SET.delete(value)
 * SET.has(value)
 * SET.clear()
 * SET.size
 * 
 * SET.entries
 * SET.keys
 * SET.values
 * 
 * SET.forEach((value, valueAgain, map)=>{})
 * 
 */

let log = console.log;

let set1 = new Set(); // Set(0) {}

set1.add({name: 'Ajinkya'});
set1.add({name: 'vivek'});

set1.add({name: 'Ajinkya'}) // Set(3) { { name: 'Ajinkya' }, { name: 'vivek' }, { name: 'Ajinkya' } }

for(let x of set1){
    log(x.name)
}

let set2 = new Set([1,2,3,4,1,2,5]); // Set(5) { 1, 2, 3, 4, 5 }
log(set2);

log(typeof set1); // 'object'

set1.forEach((value, valueAgain, set)=>{
    console.log(value, valueAgain, set);
})




/**
 * WEAK SET
 * ONLY OBJECTS can be added.
 * 
 */

 let visitedSet = new WeakSet();

 let john = { name: "John" };
 let pete = { name: "Pete" };
 let mary = { name: "Mary" };
 
 visitedSet.add(john); // John visited us
 visitedSet.add(pete); // Then Pete
 visitedSet.add(john); // John again
 
 // visitedSet has 2 users now
 
 // check if John visited?
 alert(visitedSet.has(john)); // true
 
 // check if Mary visited?
 alert(visitedSet.has(mary)); // false
 
 john = null;