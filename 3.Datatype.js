"use strict"; //treat all js code treated as newer version

// alert(3+3); console.log("naresh singh") 
// this is not best practice please use next line for better code readbility.

// Datatypes

// primitive datatype : all primitive datatype are call by value.
let name = "naresh singh"; // string

let salary = 2222.45 //numbers

let id = 12;  //number

let y = true ; //Boolean

let state;   //this is undefined beacuse we dont assign the value to the State variable
console.log(typeof(state));

let city = null;   // it is standalone value that we say "data aya hi nhi"
console.log(typeof(city));
// important : null is a object

const id1 = Symbol("123"); // symbol used for unique values 
const anotherId = Symbol("123");
console.log(id1,anotherId)
console.log(id1 === anotherId)

// BigInt 
const bigNumber = 12345678549552211n // store to use a big number 

// reference datatype (non primitive)
// array , objects , functions 

// array
let arr = [1,2,3,"naresh",2.2,true];
console.log(arr); // typeof = object

// objects 
let Naresh_info = {
    name: "Naresh Singh",
    age : 22,
    address : "goverdhan",
    college : "gla university"
}
console.log(Naresh_info);

// functions 
const myFunc = function(){
    console.log("this is a function");
}
myFunc()

// typeof 
console.log(typeof "naresh");  // 1 way

console.log(typeof(arr));   // 2 way