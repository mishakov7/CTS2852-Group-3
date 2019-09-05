/*
 *	There are different ways to return variables in functions throughout 
 * 	many programming languages.
 * 
 *  One way of doing it through Javascript is to return those 
 *  variables as an array.
 * 
 */

// Adds the 2 numbers
function addNumbers(){
           
	var numbers = validate('add');
	
	var sum = numbers[0] + numbers[1];
	
	alert(numbers[0] + " + " + numbers[1] + " = " + sum);
	document.getElementById("expression").innerHTML = (numbers[0] + " + " + numbers[1] + " = " + sum);

}

// Subtracts the 2 numbers
function subtractNumbers(){
           
	var numbers = validate('subtract');
	
	var total = numbers[0] - numbers[1];
	
	alert(numbers[0] + " - " + numbers[1] + " = " + total);
	document.getElementById("expression").innerHTML = (numbers[0] + " - " + numbers[1] + " = " + total);

}

// Multiplies the 2 numbers
function multiplyNumbers() {
	var numbas = validate('multiply');
	
	var total = numbas[0] * numbas[1];
	
	alert(numbas[0] + " * " + numbas[1] + " = " + total);
	document.getElementById("expression").innerHTML = (numbas[0] + " * " + numbas[1] + " = " + total);

}

// Divides the 2 numbers
function divideNumbers() {
	var vals = validate('divide');
	
	if (vals == 'undefined') {
		document.getElementById("expression").innerHTML = ("Undefined.");
		return;
	}

	var total = vals[0] / vals[1];
	
	alert(vals[0] + " / " + vals[1] + " = " + total);
	document.getElementById("expression").innerHTML = (vals[0] + " / " + vals[1] + " = " + total);

}

// This immediately validates the numbers that the user enters.
function validate(operation) {
	
	// Continues prompting the user for a number until they actually return a value
	do {
		var n1 = Number(prompt("Enter first number "));
		
		if (isNaN(n1) == true) {
			alert("Invalid number! Please enter a valid number.");
		}
		
	} while (isNaN(n1) == true);
	
	// Continues prompting the user for a number until they actually return a value
	do {
		var n2 = Number(prompt("Enter second number "));
		
		if (isNaN(n2) == true) {
			alert("Invalid number! Please enter a valid number.");
		}
		
	} while (isNaN(n2) == true);
	
	// Catches the exception where the user tries to divide by 0
	if (operation == 'divide') {
		if (n2 == 0) {
			alert("Error! Numbers cannot be divided by zero. Undefined.");
			return 'undefined';
		}
	}
	
	// Return the two numbers into an array
	var values = [n1, n2];
	
	return values;
}
