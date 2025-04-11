# HTML
Hypertext Markup Language, is the foundation of most webpages. It´s a language used to structure and format content, defining how elements like text, images and links are displayed on a browser. Essentially html provides the skeleton for a web page.

## STRUCTURE
````
<!DOCTYPE html>
<html>
code goes here
</html>
````

The `<!DOCTYPE html>` is the document type declaration that appers at the top of a .html file and tells the browser that our fille is written in HTML5. 
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
[![Browser tab](https://i.postimg.cc/G2bTD6bJ/Captura-de-tela-2025-04-11-011812.png)](https://postimg.cc/xkFdDxJc)