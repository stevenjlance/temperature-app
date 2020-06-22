// prints "hi" in the browser's dev tools console
console.log("hi");
let temp = 70;
let far = document.querySelector(".far");
let cel = document.querySelector(".cel");

let upArrow = document.querySelector(".up-arrow");
let downArrow = document.querySelector(".down-arrow");
var celsius = (temp/32)*5/9

upArrow.addEventListener("click", function(event) {
  temp = temp + 1;
  console.log(temp);
  far.innerHTML = `${temp} F`;
  celsius = Math.round((temp-32)*5/9);
  cel.innerHTML = `${celsius} C`;
});

downArrow.addEventListener("click", function(event) {
  temp = temp - 1;
  console.log(temp);
  far.innerHTML = `${temp} F`;
  celsius = Math.round((temp-32)*5/9);
  cel.innerHTML = `${celsius} C`;
});
