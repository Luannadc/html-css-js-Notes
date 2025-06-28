<h1>CSS INTRODUCTION</h1>
A CSS rule consists of a selector and a declaration block.

```
p {
  color: red;
  text-align: center;
}
```
<b>p</b> is a selector in css (it points to the html element you want to style).<br>
<b>color</b> is a property, and <b>red</b> is the property value.<br> <b>text-align</b> is a property, and <b>center</b> is the property value.<br>

<h3>CSS Selectors</h3>
Css selectors are used to "find" (or select) the HTML elements you want to style.<br>
We can divide CSS selectors into five categories:
<ul>
- <b>Simple selectors</b> (select elements based on name, id, class).<br>
- <b>Combinator selectors</b> (select elements based on a certain state)
- Pseudo-class selectors (select and style a part of an element).<br>
- <b>Attribute selectors</b> (select elements based on an attribute or attribute value).
</ul>
<h3>CSS element Selector</h3>
The element selectors selects HTML elements based on the element name. 

```
p {
  text-align: center;
  color: red;
}
```
Here, all `<p>` elements on the page will be center-aligned, with a red text color.

<h3>The CSS id Selector</h3>
The id selector uses the id attribute of an HTML element to select a specific element.<br>
The id of an element is unique within a page, so the id selector is used to select one unique element.<br>
To select an element with a specific id, write a hash (#) character, followed by the id of the element.<br>

```
#para1 {
  text-align: center;
  color: red;
}
```
The CSS rule will be applied to the HTML element with id="para1".

<b>⚠️NOTE:</b> An id name cannot start with a number!<br>
<h3>The CSS class Selector</h3>
The class selector selects HTML elements with a specific class attribute. To select elements with a specif clas, write a period ( . ) character, followed by the class name.

```
.center {
    text-align: center;
    color: red;
} 
```
All HTML elements with class="center" will be red and center-aligned.<br>
You can also specify that only a specific HTML elements should be affected by a class.

```
p.center {
  text-align: center;
  color: red;
}
```
Only `<p>` elements with a class="center" will be red and center-aligned.<br>
HTML elements can also refer to more than one class.
```
<p class="center large"> 
This paragraph refers to two classes.</p>
```
<b>⚠️NOTE:</b> A class name cannot start with a number!<br>

<h3>The CSS Universal Selector</h3>
The universal selector ( * ) selects all HTML elements on the page:

```
* {
    text-align: center;
    color: blue;
}
```
<h3>The CSS Grouping Selector</h3>
The grouping selector selects all the HTML elements with the same style definitions.<br>

```
h1, h2, p {
    text-align: center;
    color: red;
}
```
Separate each selector with a comma. 

<h2>How To Add CSS</h2>
When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

<h3>Three Ways to Insert CSS</h3>
<ul>
    - External CSS<br>
    - Internal CSS<br>
    - Inline CSS<br>
</ul>
<h4>External CSS</h4>
With an external style sheet, you can change the look of an entire website by changing just one file!<br>
Each HTML page must include a reference to the external style sheet file inside the &lt;link&gt; element, inside the &lt;head&gt;.

```
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Heading</h1>
<p>Paragraph</p>

</body>
</html>
```
An external style sheet can be written in any text editor, and must be saved with a .css extension. The external .css file should not contain any HTML tags.<br>
Here is how the "style.css" file looks:

```
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```
