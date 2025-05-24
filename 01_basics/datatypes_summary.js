// primitive data types 

// 7 types string number boolean null undefined symbol BigInt(scientific values)


// non -primitive data types(References)
// Array Object function

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh", // key value
    age: 22,
}

// simply function can be declared as this function(){}
const myFunction = function(){  //declared function as a variable
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//  stack and heap

// stack (primitive data type)  copy of variable we got 
// heap (non primitive data type) actual value we got

let myname = "Madhu"
let anotherName = myname
anotherName = "proMadhu"

console.log(myname);
console.log(anotherName);

let userone = {
    email:"madhu@google.com",
    upiId:"user@ybl"
}

let usertwo = userone
usertwo.email="mk@gmail.com"

console.log(userone.email)
console.log(usertwo.email);



