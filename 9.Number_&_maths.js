/* Math is one of JavaScript's global or standard built-in objects, 
and can be used anywhere you can use JavaScript. It contains useful constants like π and
 Euler's constant and functions such as floor() , round() , and ceil() .
 */

 const score = 400
 console.log(score)
 
//  *! to explicitly define that this is number no 100%
const balance = new Number(5000) // ** now this 100% number
console.log(balance)
console.log(typeof balance)

// *! change in to string 
console.log(balance.toString().length);
console.log(typeof balance)

// *! add point after the value
console.log(balance.toFixed(1))

const otherNumber = 123.456
console.log(otherNumber.toPrecision(3))

// *! to add comma between zero according to digits
const hundereds = 1000000 
console.log(hundereds.toLocaleString())

// *! how much digit a number can be saved maximum 
console.log(Number.MAX_VALUE)

// *! how much minimum number can save a integer
console.log(Number.MIN_VALUE)

// *! how much safe value a integer can save
console.log(Number.MAX_SAFE_INTEGER)

// ** ++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// *! The JavaScript Math object allows you to perform mathematical tasks on numbers.
console.log(Math)

// *! absolute value
console.log(Math.abs(-4))

// *!  round off the value
console.log(Math.round(4.6))

// *! ceil : round of the value in upper number
console.log(Math.ceil(4.8))

// *! floor : round off the value in lower number 
console.log(Math.floor(3.9))

// *! find min and max  value in array 
console.log(Math.min(1,7,5,6,4,2))
console.log(Math.max(1,7,5,6,4,2))

// ** math random 
console.log(Math.round((Math.random()*100) + 1))

// task : i want numbers between 10 and 20
const max = 20
const min = 10
console.log(Math.floor(Math.random()* (max - min + 1))) 
