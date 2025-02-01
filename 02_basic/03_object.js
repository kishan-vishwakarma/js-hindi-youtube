//mainly two type 1.singleton 2. object literals

const mySym = Symbol("key1")
// object literals
const jsUser = {
 name:"kishan",
 "Full Name":"Kishan Kumar Vishwakarma",
 dob:18,
 course:["css","js","html"],
 [mySym]:"myKey1"
}

// kishan
// Kishan Kumar Vishwakarma
// string
// {
//   name: 'kishan',
//   'Full Name': 'Kishan Kumar Vishwakarma',
//   dob: 18,
//   course: [ 'css', 'js', 'html' ],
//   [Symbol(key1)]: 'myKey1'
// }
// console.log(jsUser.name);
// console.log(jsUser['name']);
// console.log(jsUser["Full Name"]);
// console.log(typeof jsUser[mySym]);

jsUser.greeting = function(){
 console.log('Hello jsUser');
 
}

jsUser.greetingTwo = function(){
 console.log(`Hello jsUser ${this.name}`);
 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



