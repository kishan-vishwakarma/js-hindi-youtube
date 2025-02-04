

// if (true) {
//    let a = 10
//    const b = 20
//    var c = 30
// }

// console.log(a); // error : a is not defined 
// console.log(b); // error : b is not defined
// console.log(c);  // working but here score not working so never use var 


let a = 100 ; // globla variable
if (true) { 
   let a = 10 // block variable
   const b = 20
  console.log("inner : ",a); // block scope

}
console.log("outer :",a); // global scope

