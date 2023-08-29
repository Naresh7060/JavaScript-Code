// *! Array is a single variable that is used to store elements of different data types.

// *! arrays are zero-indexed. 

// *! Arrays are not associative in nature.

// *! javascript array are resiable (it can be expended after the instalization)

// *! Arrays are used when we have a list of items.

// todo: example 

const myArr =[0,1,2,3,4,5,6]
console.log(myArr)

const myCar = ["maruti","thar","swift"]
console.log(myCar)
console.log(typeof myCar)
// ** access the araay element through the indexing
console.log(myArr[3])
console.log(myArr[-3])   // undefinded

// *! Difference between shallow copy and deep copy 

// Shallow copy : A shallow copy of an object is a copy whose properties share the same references 
// as those of the source object from which the copy was made.

// Deep copy : A deep copy of an object is a copy whose properties do not share the same references 
// as those of the source object from which the copy was made.


// *! Method of Array

const myArr2 = [12,13,4,5,7,8,14,45,65,78,89]

// add a value in array 
myArr2.push(23)
console.log(myArr2)

// remove last value from array 
myArr2.pop()   // no perameter needed
console.log(myArr2)

// add/shift a value at starting in array
myArr2.unshift(21)
console.log(myArr2)

// remove unshift value 
myArr2.shift()  // no perameter required
console.log(myArr2);

// find the length of the array 
console.log(myArr2.length)

// ask to the array value exixt or not
console.log(myArr2.includes(9))  // false
console.log(myArr2.includes(13))  // true

// find the indexing value of any element 
console.log(myArr2.indexOf(13))

// to bind in array and also change into string 

const newArr = myArr2.join()
console.log(newArr)
console.log(typeof newArr)

// slice and splice 

// slice : value not come out of the array . and also last range value not included
// splice :value come out of the array . and also last range value included

console.log("A",myArr2)  // original array

const newn1 = myArr2.slice(1,3) // 3 not ne included
console.log(newn1)
console.log("B",myArr2)

const newn2 = myArr2.splice(1,3)  //index 3 included
console.log(newn2)
console.log("C",myArr2)

// *************************************************Array-2***************************************************
const marvelHeroes = ["thor","ironmen","spidermen"]
const dcHeroes = ['supermen','flash','batmen']

marvelHeroes.push(dcHeroes) // it will take dcHeroes as a sigle array dataelement 
console.log(marvelHeroes)
// [ 'thor', 'ironmen', 'spidermen', [ 'supermen', 'flash', 'batmen' ] ]

const newConcat = marvelHeroes.concat(dcHeroes)
console.log(newConcat)

// spread operator 
const all_new_heroes = [...marvelHeroes,...dcHeroes]
console.log(all_new_heroes)

// make a easy to multiple arrays of arrays 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// data fetch from website in any format and change into in array 
console.log(Array.isArray("Naresh"))
console.log(Array.from("Naresh"))  // now it an array

console.log(Array.from({name : "Naresh"}))  // output : [] empty array


// convert multiple value to convert in array 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))