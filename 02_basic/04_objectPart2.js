// singleton 

// const myObj = new Object(); //singleton object
// console.log(myObj)  

// const myObj2 = {}
// console.log(myObj2);  // object literals


const userDetails = {
  email:"kishanv@gmail.com",
   fullname : {
      username :{
        first:"kishan",
        last: "vishwakarma"
      }
   }
}
// console.log(userDetails.fullname.username.last);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = { obj1, obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(userDetails));
// console.log(Object.values(userDetails));
// console.log(Object.entries(userDetails));
console.log(userDetails.hasOwnProperty('namel'));
