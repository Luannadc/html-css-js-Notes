# JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task. The function is executed when "something" invokes/calls it.   
```
function myFunction(p1, p2){
    return p1 * p2;
}
```
Function to compute the product of p1 and p2.  

<h2>Function Syntax</h2>

A JavaScript function is defined with the `function` keyword, followed by a name, followed by parentheses ( ).<br>

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).<br>

The parentheses may include parameter names separated by commas: <br>
<b>(parameter1, parameter2, ...)</b>

The code to be executed, by the function, is placed inside curly brackets { }.

```
function name(parameter1, parameter2, parameter3){
    // code to be executed
}
```
Function <b>parameters</b> are listed inside the parentheses ( ) in the function definition. <br>

Function <b>arguments</b> are the value received by the function when it is invoked.<br>

Inside the function, the arguments behave as local variables.<br>

<h2>Function Invocation</h2>

The code inside the function will execute when "something" invokes the function:
  - when an event occurs (when a user clicks a button)
  - when it is invoked from JavaScript code.
  - automatically (self invoked)

<h2>Function Return</h2>

When JavaScript reaches a `return` statement, the function will stop executing.<br>

If the function was invoked from a statament, JavaScript will "return" to execute the code after the invoking statement. <br>  

Functions often compute a return value. The return value is "returned" back to the "caller":

```
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a,b){
    return a * b;
    //function returns the product of a and b
}
```
<h2>Why use functions ?</h2>
 
  - code reusabiliy
  - maintainability
  - modularity and organization
 
<h2>The ( ) operator</h2>

The `( )` operator invokes the function:

```
function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}
let value = toCelsius(77);
```

<h2>Local Variables</h2>

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

```
// code here can NOT use carName

function myFunction() {
  let carName = "BMW";
  // code here CAN use carName
}

// code here can NOT use carName
```
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.