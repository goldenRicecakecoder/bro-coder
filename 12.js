/* slice() extracts a section of a string
and returns it as a new string, 
without modifying the original string */

let fullName = "Broke code";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullname.slice(0,fullName.indexOf(" "))
lastName = fullname.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);