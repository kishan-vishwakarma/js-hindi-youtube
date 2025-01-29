// primitive datatype 
// 7 Types : string, number, boolean, symbol, null, undefined,BigInt
const testSymbol = BigInt('123');
// console.log(typeof testSymbol);


// non-primitive (Reference )

// array, object, function

const myArr = ["Honda","Hyundayi","Mahindra"] // object

let myObj = { // object
 Tvs:"Apache",
 Honde:"spendor"
}

let myFn = function(){ // function but it also called object function
 console.log("This is my first Fn in Js");
 
}

// console.log(typeof myArr);


//================ Memory *** ===================

// stack (primitive) and heap (reference or non-primitive)

let youtubeName = "HitechChoudharyDotCom";

let anotherName = youtubeName;

anotherName = "ChaiAurCode";

// console.log(youtubeName);
// console.log(anotherName);


let obj = {
  email:"kishan@gmail.com",
  mob:"9695116238"
}

let newMyObj = obj

newMyObj.email = "hitesh@gmail.com"

console.log(obj.email);
console.log(newMyObj.email);
