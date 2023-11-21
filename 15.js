
 document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckbox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){
        console.log("you are subscribed");
    } else {
        console.log("You are not subscribed");
    }

    if(visaBtn.checked){
        console.log("you are paying with a visa");
    } else if(paypalBtn.checked){
        console.log("you are paying with a paypal");
    } else if(mastercardBtn.checked){
        console.log("You are paying with the masters card");
    } else {
        console.log("PICK A PAYMENT TYPE")
    }
 }