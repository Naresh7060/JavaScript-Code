
// *! Date : Date is an onject in javascript it provide us to real date / current date

let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// *! create your own date / find any date
let myCreateDate = new Date(2023,1,23)  // TODO : month start counting from zero 
console.log(myCreateDate.toDateString())

//*! another method to declare date as well time 
let myNewDate = new Date(2023,0,23,5,3)
console.log(myNewDate.toLocaleString())

// *! another method (yyyy-mm-dd)
let anotherDate = new Date("2023-01-17")  // TODO : here month start from 01 not 0
console.log(anotherDate.toLocaleString())

// *! time in mili seconds
console.log(Math.floor(Date.now() /1000))

// cuurent date and time 
let dateIs = new Date()
console.log(dateIs.toDateString())
console.log(dateIs.getDay())
