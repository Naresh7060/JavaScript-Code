// *! A string can be any text inside double or single quotes and it stores a series of characters like "John Doe". 
const name = 'naresh singh' // ** string can be in single code or double code
console.log(name);

const name2 = "kesahv gulati"
console.log(name2);

// *! string concetination 
let firstName = 'Naresh ';
const lastName = "Singh";
console.log(firstName + lastName);

//*! string interpolation :
// **String interpolation is a technique in computer programming that allows you to insert the value of a variable or expression into a string.

const student1 = 'pratap';
const student2 = 'chetan';

// ** please focus on quotes in console string
console.log(`student1 name is ${student1.toLowerCase()} and student2 name is ${student2.length}`)

// *! string as object 

const gameName = new String('naresh singh')
console.log(gameName)
console.log(typeof gameName)

// *! accessing string values using index value
console.log(gameName[3])

// *! find the length of the string
console.log(gameName.length)

// *! change uppercase and lowercase 
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())

// *! to check the character position 
console.log(gameName.charAt(2))

// *! which character hold which position 
console.log(gameName.indexOf('h'))

// *! change into sunstring 
const str1 =  "Naresh-thakur"
console.log(str1.substring(0,8))

// *! slicing a string : we can also ude negative value in slice
let sliceString = str1.slice(0, 2)
console.log(sliceString)

// *! trim string: to remove extra space from any string
const newStringOne = "     naresh     "
console.log(newStringOne)
console.log(newStringOne.trim())


// *! string replace : to replace any string
const url = "http://naresh @345.com"
const renamed = url.replace('@345','7060')
console.log(renamed)

// *! ask quesition to the string 
console.log(url.includes('naresh'))
console.log(url.includes('singh'))

// *! break a string into array based on any symbol
let str3 = "naresh-singh-thakur"
console.log(str3.split('-'))