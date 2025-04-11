# CSS Syntax
A css rule consists of a selector and a declaration block.<br/>
> h1 {color:blue; font-size:12px;}

h1 is the selector, h1 points to the html element you want to style.<br/>

The declaration block {  } contains one or more declarations separated by semicolons.<br/>

<<<<<<< HEAD
Each declaration includes a css property name and a value, separeted by a colon :
Multiple css declarations are separated with semicolons ;

## Css Selectors
Css selectors are used to select the html elements you want to style.

We can divide css selectors into five categories:</br>

- **Simple selectors** (select elements based on name, id, class).
- **Combinator selectors** (select elements based on a certain state).
- **Pseudo-class selectors** (select elements based on a certain state).
- **Pseudo-elements selectors** (select elements based on an attribute or attribute value).</br>

### The Css element Selector
The element selector selects html elements based on the element name. 
=======
Each declaration includes a css property name and a value, separted by ':'<br/>

## Css Selectors
A css selector selects the html element(s) you want to style.<br>
We can divide Css selectors into five categories: <br>
 
 - **Simple Selectors** (select elements based on name, id, class).
 - **Combinator Selectors** (select elements based on a specif relationship between them).
 - **Pseudo-class selectors** (select elements based on a certain state).
 - **Pseudo-elements selectors** (select and style a part of an element).
 - **Attribute selectors** (select elements based on an attribute or attribute value).

### CSS element selector
The element selector selects html elements based on the element name.<br>
````
p{
    text-align: center;
    color: red;
}
`````
<br>
 All < p > elements on the page will be center-alligned, with a red text color.<br>

### CSS id Selectors<br>
The id selectors uses the id attribute of an html element to select a specific element. <br>
The id of an element is unique within a page, so the id selectors is used to select one unique element. <br>
To select an element with a specific id, write a hash (#) character, followed by the id of the element.
````
#para1{
    text-align: center;
    color: red;
} 
````
the css rule will be applied to the html element with id = "para1".
> an id name cannot start with a number. 

### The Css class Selector
The class selector selects html elements with a specific class attribute. <br>
To select elements with a specific class, write a period (.) character, followed by the class name.<br>
`````
.center{
    text-align: center;
    color: red;
}
``````
> in this example all html elements with class = "center" will be red and center-aligned.<br>

you can also specify that only specific html elements should be affected by a class.
````
p.center{
    text-align: center;
    color: red;
}
````
***HTML elements can also refer to more than one class***
````
<p class = "center large" >This paragraph refers to two classes.
</p>

````
in this example the < p > element will be styled according to class = "center" and to class = "large".
>a class name cannot start with a number.
## The Css Universal Selector
The universal selector (*) selects all HTML elements on the page.
````
* {
    text-align: center;
    color: blue;
}  
````
The Css rule will affect every html element on the page.
## The Css Grouping Selector
The grouping selector selects all the html elements with the same style definitions.
Look at the following css code (the h1, h2, and p elements have the same style definitions):
````
h1 {
    text-align: center;
    color: red;
}
h2 { 
    text-align: center;
    color: red;
}
p{
    text-align: center;
    color: red;
}
>>>>>>> 1e1e8237212ae9fc6de2cc47bb5010d8487857ab
