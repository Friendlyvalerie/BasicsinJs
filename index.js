//This is a js code
console.log('Hello World');

//Declare a variable called name and assign it a value
/*A variable cannot be a reserved keyword,it should be meaningful,cannot start with a number,
cannot contain space or hyphen,finally they are case-sensitive*/
let name = 'Valerie';
console.log(name);

//Constants
const interestRate = 0.3;
console.log(interestRate);

//Primitive datatypes
/*let name = 'Valerie'; //string literal
let age = 20; //number literal*/
let isApprived = true; //boolean literal(true or false)
let firstName = undefined;
let selectedColor = null;

let person = {
    name: 'Valerian',
    age: 22
};
console.log(person);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

//Functions
//Performing a task
function greet(name, lastName) {
    console.log('Hello' + '\t' + name + '\t' + lastName);
}
//Call the function
greet('Valerie', 'Smith');
greet('Linda', 'Omkara');

//Function for calculating a value
function square(number) {
    return number * number;
}
let number = square(20);
console.log(number);