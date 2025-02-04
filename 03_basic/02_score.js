

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
  // console.log("inner : ",a); // block scope

}
// console.log("outer :",a); // global scope

// here in child can access it property but parent don't 
// Closure Example
function one(){
  const username = "hitesh"
  function two(){
      const website = "youtube"
      console.log(username);
      
  }
  // console.log(website);
  two()
  
}

// one();


//+++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

addOne(5) // no error 

function addOne(num){
  return num + 1
}



addTwo() // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(n){
  return n + 2
}

// addTwo()  // no error 
