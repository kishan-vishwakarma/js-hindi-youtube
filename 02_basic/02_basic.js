const marvel_heros = ["spiderman","iron","thor"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); 
// [ 'spiderman', 'iron', 'thor', [ 'batman', 'superman', 'flash' ] ]

// console.log(marvel_heros.concat(dc_heros));
// [
//  'spiderman',
//  'iron',
//  'thor',
//  [ 'batman', 'superman', 'flash' ],
//  'batman',
//  'superman',
//  'flash'
// ]


const all_heros = [...marvel_heros,...dc_heros] // spread operator
// [ 'spiderman', 'iron', 'thor', 'batman', 'superman', 'flash' ]
// console.log(all_heros);


// very interesting 

const arrOne = [1,2,3,[4,5],[6,7,[8,9]]]
const allArrOne = arrOne.flat(Infinity)
// console.log(allArrOne); // [1, 2, 3, 4, 5,6, 7, 8, 9 ]

 

 // console.log(Array.isArray("Hitesh"));
 const arrTwo = Array.from("Hitesh")
 // console.log(typeof arrTwo);
 
 let score1 = 100
 let score2 = 200 
 let score3 = 300 
 const newArr = Array.of(score1,score2,score3)
 
 console.log(newArr);
 
