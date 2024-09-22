// for...of works on iterables like arrays, strings, and maps.
// Works with iterable objects like arrays and strings.

// Array Example
const arr = [1, 2, 3, 4, 5, 6];
for (const item of arr) {
  // console.log(item); // Logs each item of the array (1, 2, 3, etc.)
}

// String Example
const name = "Smit";
for (const myname of name) {
  // console.log(myname); // Logs each character of the string ("S", "m", "i", "t")
}

// Maps: Collection of key-value pairs where keys are unique.
const map = new Map();
map.set("Smit", "92xx28xxx4");
map.set("City", "Surat");
map.set("Country", "India");
map.set("Smit", "92xx28xxx4"); // Duplicate key, value will be overwritten

// Iterating over Map
for (const [key, value] of map) {
  // console.log(key + ":- " + value); // Destructures the array returned by map iteration
  // console.log(value); // Logs only the value if needed
}

// Note: for...of loop works on iterables like maps, but not directly on objects.

// Object Example
const obj = {
  name: "Smit",
  age: 19,
  city: "Surat",
  // name: "Smit" // Duplicate key is not allowed in objects
};

// Using for...in loop for objects (for...of doesn't work on plain objects)
// for...in works on objects and arrays (but mostly used for objects).

for (const key in obj) {
  // console.log(obj[key]); // Accesses the value of each key
  // console.log(`${key} :- ${obj[key]}`); // Logs each key-value pair  
}

// Checking (for...in) loop on an array
const lang = ["js", "cpp", "c", "py", "java"];
for (const key in lang) {
  console.log(lang[key]); // Logs each element in the array (indexes are keys in arrays)
}
