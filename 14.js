// if statenent = a basic form of decision making
// if a condition is true, then do something
// if its not, then dont do it

let age = 21;

if(age >= 18){
    console.log("You are an adult!");
}
else if (age < 0){
    console.log("you havent been born yet");
}
else if (age >= 65){
    console.log("You are a senior citizen!"); // <- order this correctly so you should put this at the top
}
 else{
    console.log("You are a child");
 }

 let online = true;

 if(online){
    console.log("You are online");
 }
else {
    console.log("You are offline");
}