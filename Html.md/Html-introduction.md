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

#### Links 🔗
`<a>` is the anchor element.<br>
href or hyperlink reference, is a reference or a pointer to another website.
```
<a href="https://archive.org/web">Internet Archive</a>
```
This can also be used to point to an email or phone number using mailto, tel or sms:<br>
- `<a href="mailto:frankie@gmail.com">📧</a>`<br>
- `<a href="tel:221-232-9807">🤝</a>`<br>
- `<a href="sms:543-937-HTML">💬</a>`<br>
the emojis can be replaced by words or phrases to be displayed as the interactive message with the link.<br>
#### Images📷
To add images we use a similar format, but with `<img>` element.
```
<p>Here´s a cute pic:</p>
<img src="https//i.reed.it/5unn16axx1v18.jpg">
```
the `<img>` element is another self-closing tag, so it doesn´t have a closing tag. scr attribute, which stands for "source", specifies the file path of the image. the link between the parentheses is the image path.<br>
#### Comments
```
<!--I am a comment.-->
```
they can also be used within an element:
```
<p>This text is viable.<!--But this is not.--></p><br>
```
### Attributes
#### Attributes in Image Tag
```
<img src="https://www.adoption.io/images/cats.png" width="250" alt="cats for adoption">
```
the `<img>` element uses the `scr` <u>attribute</u> to specify the file path of an image. That width="250" is an attribute that sets the width of the image. In addition to src, we can also use the alt attribute to make our image more accessible. If you text can´t appear for some reason, the alt text is displayed instead, this allows assistive devices to read our text and describe the image.
#### Attribute in Anchor Tag
We can also came across attributes when learning about using links with `<a>` anchor tags:
````
<a href="https://www.adoption.io/">Adoption Saves</a>
````
The href attribute is where we add URL that can be visited when the hyperlinked text is clicked.
We can also use the target attribute and set it to "_blank" to make the link open in a new browser tab:
```
<a href="https://www.adoption.io/"target="_blank">Adoption Saves</a>
````
### Classes and id attributes
An element can be assigned multiple class values in the form of a space-separated list:<br>
```
<p class="first-value second-value third-value">Hello, World</p>
```
Each element can only have one id value with no space. Every id value should be unique in the entire page:
