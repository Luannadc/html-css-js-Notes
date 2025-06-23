### JAVASCRIPT SUMMARIES
<p>JavaScript runs one line at a time, from the top to bottom.</p>
<p> It´s optional to use <b>;</b> in JavaScript</p>

<h3>Output</h3>
<p>For output a menssage use <b>console.log("Hello World").</b></p>

<h3>Comments</h3> 
<p>Comments can be made by using <b>//</b> for line comments or <b>/*</b> and <b>*/</b> for multiple line comments.

<h3>Variables</h3>
<p>Variables are used for storing data values that can be used later in your program.</p>
To create or declare a variable, we need a <b>let</b> or <b>const</b> keyword:

<b>- let</b> is used for variables where the value will change.  
<b>- const</b> is used for variables where the value will stay constant.  
after the keyword we need a variable name, an <b>=</b> sign, and a value:  
>keyword name = value;  

here are some examples of variable declaration:
> const userId = "8839920193"  
let userName = "Luannadc"  

for a <b>let</b> variable, we can change its value, or print it out:
> let userName = "Luannadc";  
userName = "Luanna";  
console.log(userName);   
//output: Luanna  

for a <b>const</b> variable, we can´t change its value, but we can still print it. if you try to reassign a new value to a <b>const</b> variable (or create one without a value), you get an error like this one:
>const userId = "8125497315"  
userId = "356"  
// SyntaxError: Identifier 'userId' has already been declared

<h3>Data Types</h3>
 Let´s start with the four most important ones:  

 #### Numbers
 A number can be any integer or decimal number. It can be used to represent whole numbers, fractions or precise measurements.
 >let year = 2023;  
let age = 28;  
let mealCost = 12.99;  
const pi = 3.14;  
const daysOfWeek = 7;
#### String 
A string is used for storing text or sequence of characters. Strings are wrapped in double quotes " " or single quotes ' '.
>let message = "good nite";  
let user = '@zuck';  
const company = "Meta";
#### Boolean
A Boolean data type, or bool, stores a value that can only be either true or false. In JavaScript, it's lowercased true or false.
>let hungry = true;  
let lateToMeeting = false;  
const earthIsFlat = false;
#### Undefined
Any variable that is declared but hasn't yet received a value is undefined. This may happen when a variable is declared without being assigned a value, or when it is explicitly assigned a value of undefined:

>let startDate = "01/23/2022";  
let endDate;
console.log(startDate); // 01/23/2022  
console.log(endDate);   // undefined

This data type is useful if you create a variable but haven't yet decided what value it should have.

<h3>Operators</h3>  
JavaScript has the following arithmetic operators:

  '+' Addition  
  '-' Subtraction  
  '*' Multiplication
  '/' Division  
  '%' Modulo  
  '**' Exponent  
  
