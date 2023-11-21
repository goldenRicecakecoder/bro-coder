let area;
let width; 
let height;
width = window.prompt("enter width");
height=  window.prompt("enter height");
area = 54;

console.log("The area is:", area);

area = getArea(width,height);
function getArea(width,height){
let result = width * height;
return width*height;
}