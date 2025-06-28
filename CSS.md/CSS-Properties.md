<h1>CSS PROPERTIES</h1>

<h3>CSS COLORS</h3>
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.<br>

<h4>CSS Color Names</h4>
In CSS, a color can be specified by using a predefined color names:<br>

```
<!DOCTYPE html>
<html>
<body>

<h1 style="background-color:Tomato;">Tomato</h1>

</body>
</html>
```
CSS/HTML support 140 standard color names.

<h4>CSS Background Color</h4>
You can set the background color for HTML elements:

```
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```
<h4>CSS Text Color</h4>
You can set the color of text:

```
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```
<h4>CSS Border Color</h4>
You can set the color of borders:

```
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```
<h4>CSS Color Values</h4>
In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:<br>
Same as color name "Tomato":
<ul>
rgb(255, 99, 71)<br>
#ff6347<br>
hsl(9, 100%, 64%)<br>
</ul>
Same as color name "Tomato", but 50% transparent:
<ul>
rgba(255, 99, 71, 0.5)<br>
hsla(9, 100%, 64%, 0.5)<br>
</ul>

<h3>CSS RGB Colors</h3>
<h4>RGB Value</h4>
In CSS, a color can be specified as an RGB value, using this formula:<br>
<br>
<b>rgb(red, green, blue)</b><br>
<br>
Each parameter (red, green, and blue) defines the intensity of the color between 0 and 225.<br>
<br>
For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255) and the others are set to 0.<br>
To display black, set all color parameters to 0, like this: rgb(0, 0, 0).<br>
To display white, set all color parameters to 255, like this: rgb(255, 255, 255).<br>
<br>
Shades of gray are often defined using equal values for all the 3 light sources:<br>
<ol>
rgb(60,60,60)<br>
rgb(90,90,90)<br>
rgb(120,120,120)<br>
rgb(180,180,180)<br>
rgb(210,210,210)<br>
</ol>

<h3>RGBA Value</h3>

RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.<br>

An RGBA color value is specified with:<br>

<b>rgba(red, green, blue, alpha)</b><br>
<br>
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all).<br>
Examples:<br>
<ol>
rgba(255, 99, 71, 0)<br>
rgba(255, 99, 71, 0.2)<br>
rgba(255, 99, 71, 0.5)<br>
rgba(255, 99, 71, 0.8)<br>
rgba(255, 99, 71, 1)<br>
</ol>

<h3>CSS HEX Colors</h3>
A hexadecimal color is specified with: <b>#RRGGBB</b>, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.<br>


