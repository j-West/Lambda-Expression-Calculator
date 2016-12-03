let number1 = document.querySelector("input");
let number2 = document.querySelectorAll("input")[1];
let buttonDiv = document.querySelector(".btn-div");

// console.log(number1);
// console.log(number2);
// console.log(buttonDiv);

// Create a function that adds two numbers passed in as arguments. Return the sum.
let add = (num1, num2) => {
  return (num1 + num2);
}
// Create a function that subtracts two numbers passed in as arguments. Return the difference.
let subtract = (num1, num2) => {
  return num1 - num2;
}
// Create a function that multiplies two numbers passed in as arguments. Return the product.
let multiply = (num1, num2) => {
  return num1 * num2;
}
// Create a function that divides two numbers passed in as arguments. Return the quotient.
let divide = (num1, num2) => {
  return num1 / num2;
}

function operations(num1, num2, func) {
  document.querySelector(".resultHeader").innerHTML = func(num1, num2);
  return func(num1, num2);
}

buttonDiv.addEventListener("click", (e) => {
  if (e.target.value === "add") {
    console.log(operations(parseInt(number1.value, 10), parseInt(number2.value, 10), add));
  } else if (e.target.value === "subtract") {
      console.log(operations(number1.value, number2.value, subtract));
    } else if (e.target.value === "multiply") {
        console.log(operations(number1.value, number2.value, multiply));
      } else if (e.target.value === "divide"){
          console.log(operations(number1.value, number2.value, divide));
        }
})
