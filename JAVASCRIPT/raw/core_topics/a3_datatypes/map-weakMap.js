/**
 * MAP
 * 
 * Collection of keyed data items. 
 * Similar to JS Objects but key can be anything
 * Map preserves insertion order unlike Object.
 * Using Objects as key is most important feature of MAPS.
 * 
 * MAP.set(key, value)
 * MAP.has(key)
 * MAP.get(key)
 * MAP.delete(key)
 * MAP.clear()
 * MAP.size
 * 
 * MAP.forEach((value, key, map)=>{})
 * 
 * new Map(Object.entries({})) // Convert Object to Map
 * Object.fromEntries(MAP) // Convert Map to Object
 * 
 */

const log = console.log;

let map1 = new Map();
map1.set(1, 'value1');
map1.set('1', false);
map1.set(true, false);
log(map1); // Map(3) { 1 => 'value1', '1' => false, true => false }

log(map1.get(1)); // value1

log(map1.has(1)) // true
log(map1.delete(1)) // deletes key 1 and returns true

map1.clear() // Map(0) {}

log(map1.size); // 0

// Setting Object as key is most important feature of maps
let user1 = {name: 'ajinkya', value: 0, inspiration: 75};
let user2 = {name: 'vivek', value: 80, inspiration: 60};
let visitsCountMap = new Map();
visitsCountMap.set(user1, 14);
visitsCountMap.set(user2, 78);

/**
 * QUICK REFERENCE
 */

let map2 = new Map()

let map3 = new Map([
    ['cucucmber', 100],
    ['onion', 90]
])

map2.set(key, value);
map2.has(key);
map2.get(key);
map2.delete(key);

map2.clear();
map2.size;

map3.entries() // iterable for [key, value] 
map3.keys() // iterable for  keys
map3.values() // iterable for values

for(let x of map3.entries){
    console.log(x); [key, value]
}

Map.forEach((value, key, map)=>{});






// The MAP Problem
let map12 = new Map();
let obj1 = {name: 'rabbit'}
map12.set(obj1, 'value');
obj1 = null;
console.log(map12); // Map(1) { { name: 'sama' } => 'value' }

/**
 * WEAK MAP
 * Key must be Object only
 * If key reference deleted, its garbage referenced
 * 
 * WEAKMAP.set(key, value)
 * WEAKMAP.get(key)
 * WEAKMAP.has(key)
 * WEAKMAP.delete(key)
 * 
 * NO keys, values, entries.
 * 
 */

let weakMap1 = new WeakMap();
let obj2 = {name: 'fox'};
weakMap1.set(obj2, 'value');
obj2 = null;
console.log(weakMap1); // WeakMap { <items unknown> }

