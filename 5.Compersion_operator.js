// compersion operator : compares two value to eachother 

// there are mainly these compersion operator 
// > , < , <= ,>= , == , != 

// lets check some boring expression 

// these type of coversion should be avoid for writing clean code
console.log(null>0) // false 
console.log(null==0) // false
console.log(null<=0); // true
console.log(null>=0); // true  means : null kuch to hai but zero nhi ,kuch value hai 

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// difference between === and == 
console.log("2" == 2) //output : true  # because == checks the value not datatype 

console.log("2" === 2) //output: false # because === checks the value as well as datatype