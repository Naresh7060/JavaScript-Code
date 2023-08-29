// *!focus on working of memory in javascript 

// TODO : type of memory : stack , heap

// *? stack : stack used in primitive datatypes 

// *? heap : heap used in non primitive datatype(reference datatype)


let myCollege = "gla university"
let anotherName = myCollege
anotherName = "mathura"
console.log(anotherName)
console.log(myCollege)

let userOne = {     // *! this reference variable so store in heap
    email: "naresh@!23gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne // *! but here user two store in stack beacuse it is a 
                       // *! primitive datatype but take value as reference from heap

userTwo.email = "pratap@gmail.com" ;
console.log(userOne.email);
console.log(userTwo.email);