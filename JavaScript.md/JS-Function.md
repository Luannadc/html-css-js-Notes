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
let x = myFunction(4, 3);

function myFunction(a,b){
    return a * b;
    //function returns the product of a and b
}
```