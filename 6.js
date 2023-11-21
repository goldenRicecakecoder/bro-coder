// const = a variable that can't be changed

const pi = 3.14159;
let radius;
let circumfrence;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

pi = 1234123124124;// you cant change things if they are constant its useful for things that are set in stone

circumfrence = 2 * pi * radius;

console.log("The circumference is:" + circumfrence)