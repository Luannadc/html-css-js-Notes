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
```
<p> This is a paragraph. </p>
<p> This is another paragraph. </p>
```
`<p>` element defines a paragraph.<br>
A paragraph always starts on a new line, and a browsers automatically add some white space (a margin) before and after a paragraph.</p>
<p>Actually, you can not be sure how html will be displayed, with htlml, you cannot change the display by adding extra spaces or extra lines in your html code.</p><p>The browser will automatically remove any extra spaces and lines when the page is displayed.</p>
<p>The <code>&lt;pre&gt;</code> tag can be used to display text exactly as it is written in the html file - including spaces, line breaks, and indentation.</p>

example:<br>
```
<pre>
function helloWorld() {
    console.log("Hello, world!");
}
</pre>
```

#### Text Formatting ✒️
`<b>`<b>bold text</b>`</b>` <br>
`<i>`<i>italicize text</i>`</i>` <br>
`<u>`<u>underline text</u>`</u>` <br>
`<s>`<s>strikethrough text</s>`</s>`<br>
`<em>`<em>emphasized text</em>`</em>`<br>
`<smal>`<small>smaller text</small>`</smal>`<br>
`<mark>`<mark>marked text</mark> `</mark>`<br>
`<sub>`<sub>subscripted text</sub>`</sub>` <br>
`<sup>`<sup>superscripted text</sup>`<sup>`

#### Headings
````
<body>
<h1> News </h1>
<p> article content. </p>
</body>
````
there are six levels of headings, from `<h1>` to `<h6>`<br>
`<h1>`Heading level 1`</h1>`<br>
`<h2>`Heading level 2`</h2>`<br>
`<h3>`Heading level 3`</h3>`<br>
`<h4>`Heading level 4`</h4>`<br>
`<h5>`Heading level 5`</h5>`<br>
`<h6>`Heading level 6`</h6>`<br>
use html headings for headings only. Don´t use headings to make text BIG or <b>bold.</b>

**NOTE:** only one `<h1>` element shoud be used in a .html file.<br>
#### Break Lines
`<br>` is used to break lines, it´s a self-closing tag, so doesn´t need to be closed manually by a closing tag.
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
<p>the emojis can be replaced by words or phrases to be displayed as the interactive message with the link.</p>

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
<img src="https://www.adoption.io/images/cats.png" width="250" height="400" alt="cats for adoption">
```
the `<img>` element uses the `scr` <u>attribute</u> to specify the file path of an image. That <b>width="250"</b> is an attribute that sets the width of the image, and <b>height="400"</b> sets the height of the image (in pixels). In addition to src, we can also use the <b>alt</b> attribute to make our image more accessible. If the image can´t appear for some reason, the alt text is displayed instead, this allows assistive devices to read our text and describe the image.
#### Attribute in Anchor Tag
We can also came across attributes when learning about using links with `<a>` anchor tags:
````
<a href="https://www.adoption.io/">Adoption Saves</a>
````
The href attribute is where we add URL that can be visited when the hyperlinked text is clicked.<br>
We can also use the target attribute and set it to "_blank" to make the link open in a new browser tab:
```
<a href="https://www.adoption.io/"target="_blank">Adoption Saves</a>

````
#### Style Attribute
The <b>style</b> attribute is used to add styles to an element, such as colors, font size, and more.<br>
```
<p style="color:red;">This is a red paragraph.</p>
```
we will learn more about styles later.
#### Language Attribute
You should always include the <b>lang</b> attribute inside the <html> tag, to declare the language of the web page.<br>
The following example specifies english as the language:
```
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
````
country codes can also be added to the language code in the <b>lang</b> attribute. So, the first two chacarcters define the language of the html page, and the last two characters define the country.<br>The following example specifies english as the language and United States as the country:
```
<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>
`````
#### The title Attribute
The `title` attribute defines some extra information about an element.<br>
The value of the title attribute will be displayed as a tooltip when you mouse ouver the element:<br>
```
<p title="I´m a tooltip">This is a paragraph.</p>
```
<br>
<b>NOTE:</b> It is recommended to use quotes around attributes values, the html standard does not requires it but is a good practice, you can use double or single quotes.

### HTML Styles 
The html `style` attribute is used to add style to an element, such as color, font, size and more.

the html style attribute has the following syntax:
```
<tagname style="property:value;">
```
the property is a css property. the value is a css value.

#### Background Color 
The ccs background-color property defines the background color for an html element.
```
<body style="background-color:powderblue;">
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
```
set the background color for a page to powderblue.
```
<body>
<h1 style="background-color:powderblue;">This is a heading</h1>
<p style="background-color:tomato;">This is a paragraph.</p>
</body>
```
#### Text Color
the css `color` property defines the text color for an html element:
```
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```
#### Fonts
the css `font-family` property defines the font to be used for an html element:
```
<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
```
#### Text Size 
the css `font-size` property defines the text size for an html element:
```
<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
```
#### Text Alignment
the css `text-align` property defines the horizontal text alignment for an html element:
```
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
```
### HTML Quotation and Citation Elements
`<blockquote>` defines a section that is <u>quoted from another source</u>. Browsers usually indent `<blockquotes>` elements.
```
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>
```
`<q>` tag defines a <u>short quotation</u>. Browsers normally insert quotation marks around the quotation.
```
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
```
displayed like:

<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

`<abbr>` tag defines an <u>abbreviation or an acronym</u>, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".
Marking abbreviations can give useful information to browsers, translation systems and search-engines.<br>
**Tip**: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element. 
```
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```
displayed like:
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

 `<address>` tag defines the contact information for the author/owner of a document or an article.
The contact information can be an email address, URL, physical address, phone number, social media handle, etc.
The text in the `<address>` element usually renders in italic, and browsers will always add a line break before and after the `<address>` element.
```
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```
displayed like:
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>