const name = "kishan"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`my name is ${name} repo count is ${repoCount} !` );


const gameName = new String('Kishan-kumar-vishwakarma');
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);
// console.log(gameName[5]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('K'));


const newString = gameName.substring(2,6)
// console.log(newString);
const anotherString = gameName.slice(1,4) // slice() help get negative value
// console.log(anotherString);


const newStringOne = new String('   kishan    ');
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://kishan.com/kishan%20kumar";
console.log(url.replace('%20','-')); //https://kishan.com/kishan-kumar

console.log(url.includes('kishan')); // true

console.log(gameName.split('-',2)); // [ 'Kishan', 'kumar' ] with limit 2 
console.log(gameName.split('-')); // [ 'Kishan', 'kumar', 'vishwakarma' ] 





// other function 
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: "H"

let str = "Hello";
console.log(str.charCodeAt(0)); // Output: 72

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2)); // Output: "Hello, World"

let str = "Hello, World!";
console.log(str.includes("World")); // Output: true

let str = "Hello, World!";
console.log(str.indexOf("o")); // Output: 4

let str = "Hello, World!";
console.log(str.lastIndexOf("o")); // Output: 8

// Extracts a section of a string and returns it as a new string.
let str = "Hello, World!";
console.log(str.slice(0, 5)); // Output: "Hello"

// Splits a string into an array of substrings based on a specified delimiter.
let str = "Hello, World!";
console.log(str.split(", ")); // Output: ["Hello", "World!"]

let str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"

let str = "Hello, World!";
console.log(str.startsWith("Hello")); // Output: true

// Returns a new string with a specified number of copies of the original string.
let str = "Hello";
console.log(str.repeat(3)); // Output: "HelloHelloHello"

// Match (Find regex match in string)
console.log("123abc".match(/\d+/)); // ["123"]

// PadStart & PadEnd (Padding string to fixed length)
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"


// 🔥 Top 10 Most Used String Functions in JavaScript
// ===================================================
// length → Get the string length
// toUpperCase() / toLowerCase() → Change case
// trim() → Remove extra spaces
// split() → Convert string to an array
// replace() / replaceAll() → Replace text
// includes() → Check if string contains a value
// indexOf() / lastIndexOf() → Find substring position
// substring() / slice() → Extract part of a string
// charAt() → Get character at an index
// startsWith() / endsWith() → Check beginning or end of a string