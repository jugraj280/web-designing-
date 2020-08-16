// What are functions?
// It's a kind of envolpe where we can have one or more instruction 
// under a same name domain.

// SENARIO 1:
// Not optimized way: 
alert("Hello");
alert("Hello");

alert("Bonjour");
alert("Bonjour");

alert("Hello");
alert("Hello");

alert("Bonjour");
alert("Bonjour");

alert("Hello");
alert("Hello");


// Optimized way: 
function displayHello(){
    alert("Hello");
    alert("Hello");
}

function displayBonjour(){
    alert("Bonjour");
    alert("Bonjour");
}

displayHello(); 
displayBonjour();
displayHello();
displayBonjour();
displayHello();


// Syntax of a function:
// function <NAME>(){
// statement 1;
// statement 2;
// statement 3;
// statement 4;
// }

//Exercise 1: Create a function with a name Foo and it should display foo four times.
function displayFoo(){
    alert('foo');
    alert('foo');
    alert('foo');
    alert('foo');
}

// How to call a function? 
// <NAME>()

// Exercise 2: Call function Foo created in exercise 1:
displayFoo();
displayFoo();

// Exercise 3: Create a function having name `computeAreaOfRectangle` which should 
// calculate area of a rectangle:
// Formula: length * breadth
//                                10     20
function computeAreaOfRectangle(length, breadth){
    var area = length * breadth; // 10 * 20
    alert("Area of rectangle: " + area);
}

computeAreaOfRectangle(10, 20);

// Exercise 4: Create a function having name `computeSum` which should take 3 numbers as parameters & 
// then calculate the sum of 3 three numbers and display it to the user.
function computeSum(num1, num2, num3){
  var sum = num1 + num2 + num3; // 1 + 2 + 3 (6)
  alert("Sum of three numbers: " + sum);
}

computeSum(1, 2, 3);
computeSum(10, 20, 99);

// Homework 1: Create a function having name `computeSubstraction` which should take 4 numbers as parameters & 
// then perform the subtration of 4 three numbers and display it to the user.
// ****** Code starts here ******
function computeSubstraction(num1, num2, num3,num4){
  var subtration = num1 - num2 - num3 - num4;  //1 - 2 - 3 (6)
  alert("subtration of four numbers: " + subtration);
}
computeSubstraction(1,6,5,4);
computeSubstraction(10,20,30,56);
// ****** Code ends here ******


// Homework 2: Create a function having name `computeMultiplication` which should take 4 numbers as parameters & 
// then perform the multiplication of 4 three numbers and display it to the user.
// ****** Code starts here ******
function computeMultiplication(num1, num2, num3,num4){
  var multiplication = num1 * num2 * num3 * num4;  //1 - 2 - 3 (6)
  alert("multiplication of four numbers: " + multiplication);
}
computeMultiplication(1,6,5,4);
computeMultiplication(10,20,30,56);
// ****** Code ends here ******