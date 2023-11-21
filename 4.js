// How to accept user input

// EASY WAY with a window prompt

//let username = window.prompt("what's your name?");
//console.log(username)



// DIFFICULT WAY HTML textbox <- look in html

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("my text").value;

    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello" + username;
}
