// A variable is a container for storing data
//A variable behaves as if it was the value that it contains

//Two steps:
// 1. Declaration (var,let,const)
//2.Assignment (=assignment operator)

let firstName = "Daniel"; //strings
let falseage = "21"; /* string, beginners make the mistake of making numbers of a string and doing
 "falseage = falseage + 1" which makes it 211 */
let age = 21; // numbers
let student = false; // booleans

age = age + 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are" + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
/* the above code changes the associated id's value in this case p1, p2, p3 which are id's of paragraph tags which
 changes the value inside of the paragraphs */