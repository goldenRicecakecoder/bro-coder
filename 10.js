
let x = Math.floor(Math.random() * 20) + 1;
let y = Math.floor(Math.random() * 20) + 1;
let z = Math.floor(Math.random() * 20) + 1;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}
