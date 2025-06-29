### JAVASCRIPT SUMMARIES
<p>JavaScript runs one line at a time, from the top to bottom.</p>
<p> It´s optional to use <b>;</b> in JavaScript, but i recommend using it as good practice.</p>

<h3>Output</h3>
<p>For output a menssage use <b>console.log("Hello World").</b></p>

<h3>Comments</h3> 
<p>Comments can be made by using <b>//</b> for line comments or <b>/*</b> and <b>*/</b> for multiple line comments.

<h3>Variables</h3>
<p>Variables are used for storing data values that can be used later in your program.</p> To create or declare a variable, we need a <b>let</b> or <b>const</b> keyword. 

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

⚠️ You can also use <b>var</b> as a keyword but it was only used from 1995 to 2015, so it should only be used in code written for older browsers.

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

#### BigInt
All JavaScript numbers are stored in a 64-bit floating-point format, <b>BigInt</b> is a new datatype that can be used to store integer values that are too big to be represented by a normal JavaScript number.
>let x = BigInt("123456789012345678901234567890");

#### Arrays
The following code declares an array called `cars`, containing three items (`car names`). They are written with square brackets and separated by commas.

> const cars = ["Mercedes", "BMW", "Volvo"];

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

#### Objects
Objects are written with curly braces {}, as <b>name:value</b> separated by commas.

```
const person = {"firstName:"Luanna", lastName: "Dias", age:19, eyeColor:"green"};
``` 
The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor

 <h3>typeof Operator</h3>

 You can use the JavaScript `typeof` operator to find the type of a JavaScript variable. The `typeof` operator returns the type of a variable or an expression:<br>

 ```
typeof "Gabriely" // returns "string"
typeof "78" // returns "number"
```
<h3>Operators</h3>  
JavaScript has the following arithmetic operators:

  ' + ' Addition  
  ' - ' Subtraction  
  ' * ' Multiplication  
  ' / ' Division  
  ' % ' Modulo  
  ' ** ' Exponent  
  ' ++ ' Increment  
  ' -- ' Decrement  

<h3>JavaScript Identifiers</h3>
All JavaScript variables must be identified with unique names. These names are called identifiers.<br>

General rules for constructing names are:<br>
 - Names can contain letters, digits, underscores, and dollar signs.
 - Names must begin with a letter.
 - Names can also begin with & and _
 - Names are case sensitive
 - Reserved words cannot be used as names.

 <h3>Assignment Operator</h3>
 In JavaScript, the equal sign (=) is an "assignment operator", not a equal to operator.

 ```
 x = x + 20
 ````
 It assigns the value of `x + 20` to `x`



 