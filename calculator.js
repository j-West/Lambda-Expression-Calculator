let number1 = document.querySelector("input");
let number2 = document.querySelectorAll("input")[1];
let buttons = document.querySelectorAll("button");

console.log(number1);
console.log(number2);
console.log(buttons);
// Create a function that multiplies two numbers passed in as arguments. Return the product.
function product(num1, num2) {
  return num1 * num2;
}
// Create a function that adds two numbers passed in as arguments. Return the sum.
function sum(num1, num2) {
  return num1 + num2;
}
// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function difference(num1, num2) {
  return num1 - num2;
}
// Create a function that divides two numbers passed in as arguments. Return the quotient.
function quitient(num1, num2) {
  return num1 / num2;
}

function doSomething(num1, num2, func) {
  return func(num1, num2);
}
