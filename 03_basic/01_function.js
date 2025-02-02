function sayMyName(){
 console.log("K");
 console.log("i");
 console.log("s");
 console.log("h");
 console.log("a");
 console.log("h");
 
}

// sayMyName();

//here value know as parameters
function addTwoNumber(number1,number2){

    console.log(number1+number2);
  
}

// value know as argument
// addTwoNumber(3,4);

// function addTwoNumber(number1,number2){

//  return number1+number2;

// }

// const result = addTwoNumber(3,4);
// console.log(`Result : ${result}`);

// **************************************** Imp ***************************************
// here want to some default value use username = "Teja"
// function logiUserMessage(username = "Teja"){
//     return `${username} just logged in` 
// }

function logiUserMessage(username = "kk"){
 return `${username} just logged in` 
}
// console.log(logiUserMessage("Kishan")); // Kishan just logged in
// console.log(logiUserMessage("")); // just logged in
// console.log(logiUserMessage()); // undefined just logged in
// console.log(logiUserMessage()); 


// Rest parameter used to combine in array 
// function calculateCartPrice(...num1){
//  return num1;
// }

function calculateCartPrice(val1, val2, ...num1){
   return num1;
}
 
// console.log(calculateCartPrice(200,300,400,2000)); // [ 400, 2000 ]


//============================= Imp -> pass object into funtion ================
const user = {
  name: "Kishan",
  price: 2000
}

function handleObject(anyObj){
  console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}

// handleObject(user);
const myArray = [1,2,3,4,5,6]

function handleArrya(getArray){
 return getArray
}

// console.log(handleArrya(myArray));
console.log(handleArrya([20,30,40]));