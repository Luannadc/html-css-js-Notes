## JavaScript Conditionals
<h3>IF...ELSE</h3>

<b> if(conditional){  
 //code here   
}else{  
    //code here  
}</b>  

if the coditional is true executes the first code, if not executes the second one.
<h4>Comparison Operators</h4>
Comparison operators are used in logical statements to determine equality or difference between variables or values.

| Operator | Description |
|---|---|
| == | equal to |
| === | equal value and equal type |
| !=  | not equal |
| !== | not equal value or not equal type |
| >  | greater than|
| < | less than |
| >= | greater than or equal to|
| <= | less or equal to |

<h4>Math.random( )</h4>
In JavaScript, the <b>math.random()</b> method returns a random decimal number between 0 and 1.
Suposse we print out two of them, like so:   

>console.log(Math.random());
>console.log(Math.random());  
 
 the output would have two different numbers and that look something like:
 > 0.345268902521  
 > 0.890428492167

 to get a random integer number between 0 to 9:
 >Math.floor(Math.random() * 10);

this is multiplying the decimal number by 10 and then rounding it down to the nearest integer with <b>Math.floor()</b>. So the above two numbers would look like:
> 5  
> 8

<h4>Assigment Operators</h4>
Assignment operators assign values to JavaScript variables.<br>

| Operator | Example | Same As |
|---|---|---|
| = | x = y | x = y |
| += | x += y | x = x + y |
| -= | x -= y | x = x - y |
| *= | x *= y | x = x * y |
| /= | x /= y | x = x / y |
| %= | x %= y | x = x % y |
| **= | x **= y| x = x ** y |

<h4>JavaScript Logical Operators</h4>

<b>||</b> or  
<b>&&</b> and  
<b>!</b> not

<h4>JavaScript Type Operatos</h4>
<b>typeof</b> - returns the type of a variable  <br>
<b>instanceof</b> - returns true if an object is an instance of an object type<br>

<h3>for loop</h3>

```
for(let i = 0; i < 10; i++){
    console.log(i);
}
//0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
`i = 0` shows that we start at zero, `i++` means that we will continue increasing the value of `i` by one each time the loop executes and `i < 10` means that we will stop doing it when the value exceeds 9.<br>

```
for(let i = 9; i >= 0; i--){
    console.log(i);
}
//9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```
Here we have used `i--` to decrease each time the loop executes.<br>

<h3>while loop</h3>

The `while` loop continues to run as long as its condition is true:

```
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
//0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
<h3>do...while loop</h3>

`do...while` loops are similar to the `while` loops but have the important difference that they will always run at least once before the conditional is checked.<br>

```
let i = 10;
do{
    console.log(i);
    i++;
}while(i < 10);
```
<h3>for...in</h3>

The `for...in` loop allows you to iterate through an object´s keys. Consider the following `firstName` and `lastName` keys:
```
let obj = {
    firstName: "John",
    lastName: "Smith"
};
```
The keys can be used to get the value:

```
for (let key in obj) {
console.log(key, obj[key]);
}
// "firstName" "John"
// "lastName" "Smith"
```
<b>Why use for...in ?</b>
It lets you loop through all the keys (property names) in an object.<br>
<b>When to use:</b> When you´re working with an object and want to:
- get each key (property names).
- access the value using the key.

<b>⚠️Don´t use for...in with arrays</b>

<h3>for...of</h3>

The `for...of` loops are used for looping through iterable objects such as arrays:

```
let arr = [10, 20, 30];

for(let i of arr){
    console.log(i);
    // 10, 20, 30
}
```
<b>Why use for..of ?</b><br>
It´s easy and clean for looping through values in:
- array
- strings
- sets
- maps
<p><b>When to use:</b> When you just want the values, not their keys or indexes.</p>

