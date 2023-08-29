// string to number conversion 
let score = "33";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

// boolean conversion 
let isLoogedIn = 1
let valueInBoolean = Boolean(isLoogedIn)
console.log(valueInBoolean)

// isLoogedIn = "naresh"   -> true 
// isLoogedIn = " "  -> false 

// change to string 
let stringNumber = 33;
let ChnagedValue = String(stringNumber);
console.log(ChnagedValue)
console.log(typeof ChnagedValue)
// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0


// why string to number conversion is confusing 
let value = 3
let negativeValue = -value
console.info(negativeValue)

console.log(2**2)  // 2 ki power 2
console.log(3%2)   // gives the reminder

// add to strings 
let firstName = "Naresh ";
let lastName = "Singh";
console.log(firstName + lastName)

//add number with string 
console.log('1' + 2 + 2) // output = 122 #if the first value i string the converson will be string
// but 
console.log(1+2+"2")  //output = 32 #if the first value in number then first add the value as number then make string

console.log(+true);  //output will be 1

console.log(+""); //output will be 0

let num1 = num2 = num3 = 4;
console.log(num1,num2,num3);  // output will be 4 4 4 

// postfix 
let gameCounter = 100;
gameCounter++;
console.log(gameCounter)

// prefix 

let valueCounter = 200
++valueCounter;
console.log(valueCounter)

// postfix and prefix airthmetic operator from MDN 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"