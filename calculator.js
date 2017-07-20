console.log( "calculator.js" );

function getNum1() {
	let userNum1 = document.getElementById("value-one").value;
	userNum1 = Number(userNum1);
	// console.log( "userNum1", userNum1 );
	return userNum1;
};

function getNum2() {
	let userNum2 = document.getElementById("value-two").value;
	userNum2 = Number(userNum2);
	// console.log( "userNum2", userNum2 );
	return userNum2;
};
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function calcMulitiply(num1, num2) {
 	let product = (num1 * num2);
 	return product
 };
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function calcAdd(num1, num2) {
	let sum = (num1 + num2);
	return sum
}
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function calcSubtract(num1, num2) {
 	let difference = (num1 - num2);
 	return difference
 }
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function calcDivide (num1, num2) {
	let quotient = (num1 / num2)
	return quotient
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */
function calculate(num1, num2, calcFunction) {
	let resultValue = calcFunction(num1,num2);
	return resultValue;
}

function spitToDom(calculated) {
	let display = document.getElementById('calc-display');
	// display.innerHTML('')
	console.log( "spitToDom");

}
//In your JavaScript, put an event listener on each of the buttons.
let addButton = document.getElementById('add-btn')
	addButton.addEventListener('click', () => {
		console.log( "addButton works");
	});

let subButton = document.getElementById('sub-btn')
	subButton.addEventListener('click', () => {
		console.log( "subButton works");
	});

let multButton = document.getElementById('mult-button')
	multButton.addEventListener('click', () => {
		console.log( "multButton works");
	});

let divButton = document.getElementById('divide-button')
	divButton.addEventListener('click', () => {
		console.log( "divButton works");
	});




















