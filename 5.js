// Type Conversion = change the datatype of a value to another (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday!", "Your are", age, "years old") */

let x;
let y;
let z;

x = Number("3.14");     // converts the data to number even if its string or pizza but if its letters it converts to Nan
y = String(3.14);       // converts the data to string even if its number or boolean
z = Boolean("pizza");   // converts the data to boolean even if its number or string

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
