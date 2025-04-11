# HTML
Hypertext Markup Language, is the foundation of most webpages 🌐. It´s a language used to structure and format content, defining how elements like text, images and links are displayed on a browser. Essentially html provides the skeleton for a web page.

## STRUCTURE🏗️
````
<!DOCTYPE html>
<html>
code goes here
</html>
````

The `<!DOCTYPE html>` is the **document type declaration** that appers at the top of a .html file and tells the browser that our fille is written in HTML5. 
This is used wtith a `<html>` element containing all the code processed on the page. <br>
Inside `<html>`, there should be **two** elements:<br>
`<head>` contains all the info for your browser that´s not visible on the page. <br>
`<body>` contains all the content that will end up seeing on the page.
```
<!DOCTYPE html>
<html>
<head>
some code goes here  //not visible.
</head>
<body>
more code here //visible on the page.
</body>
</html>
````
the `<title>` element goes in the `<head>` and assigns text to the bowser tab. <br>
the browser tab looks like this when you visit the site:<br>
[![Browser tab](https://i.postimg.cc/G2bTD6bJ/Captura-de-tela-2025-04-11-011812.png)](https://postimg.cc/xkFdDxJc)<br>
```
<!DOCTYPE html>
<html>
<head>
<title>Codédex | Start your coding adventure</title>
</head>
<body>
code goes here
</body>
</html>
```
all the "main" code goes in the `<body>` element.
#### Body Element
`<body>` element defines an html document´s body and its where any content that we want to display to the user:
```
<body>
<p> code´s content </p>
</body>
```
**NOTE:** There can only be **one** `<body>` element in a file.
#### Paragraph
`<p>` Hello World! `</p>`
#### Text Formatting ✒️
`<b>`<b>bold text</b>`</b>` <br>
`<i>`<i>italicize text</i>`</i>` <br>
`<u>`<u>underline text</u>`</u>` <br>
`<s>`<s>strikethrough text</s>`</s>`<br>

#### Headings
````
<body>
<h1> News </h1>
<p> article content. </p>
</body>
````
there are six levels of headings, from `<h1>` to `<h6>`
`<h1>`Heading level 1`</h1>`<br>
`<h2>`Heading level 2`</h2>`<br>
`<h3>`Heading level 3`</h3>`<br>
`<h4>`Heading level 4`</h4>`<br>
`<h5>`Heading level 5`</h5>`<br>
`<h6>`Heading level 6`</h6>`<br>
**NOTE:** only one `<h1>` element shoud be used in a .html file.<br>
#### Break Lines
`<br>` is used o break lines, it´s a self-closing tag, so doesn´t need to be closed manually by a closing tag.
#### Lists
`<ul>` unordered lists <br>
`<ol>` ordered lists <br>
<br>
For unordered lists also known as bullet points, start with the `<ul>` tag and wrap each time in a `<li>` list item element. Like so:

````
<ul>
  <li>🧺 Go to laundromat. </li>
  <li>🖥 Code for 45 min.</li>
  <li>💅 Take a bubble bath. </li>
</ul>
````
displayed like this:

<ul>
  <li>🧺 Go to laundromat. </li>
  <li>🖥 Code for 45 min.</li>
  <li>💅 Take a bubble bath. </li>
</ul>

For ordered lists, also known as numbered lists, we use the `<ol>` element:<br>
```
<ol>
  <li>🧺 Go to laundromat. </li>
  <li>🖥 Code for 45 min.</li>
  <li>💅 Take a bubble bath. </li>
</ol>
```
displayed like this:
<ol>
  <li>🧺 Go to laundromat. </li>
  <li>🖥 Code for 45 min.</li>
  <li>💅 Take a bubble bath. </li>
</ol>

#### Links

