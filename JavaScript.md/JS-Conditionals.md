## JavaScript Conditionals
<h4>IF...ELSE</h4>

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
| !===| not equal value or not equal type |
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

