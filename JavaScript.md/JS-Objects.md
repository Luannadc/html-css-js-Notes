# JavaScript Objects

In real life, objects are things like: houses, cars, animals, people or any other subjects. Here is a car object example:

<img src ="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331rjFhnOqIbq1617L3hpvYLfCny2oWYgpnQ97lX80UrO0hZHVAfS5cVLNHCLvhJP%25z6eEzFu4fXBjvWz3QttE6BmudhSId4k9VTCrmpIUrOrJrhDGwXHi4T4qF9%25rJHFlFe6ou4TJIsIKOL3FlTv0VliyXIslGAzaKCrv0s9Oa6TE4GA0ogRk3NF9OALUxKckIogOybWBanvLUgChSD25GybUEqdNp89ChbNmQkrPoEqhk7ZSkMLNmqn1cv8Dyk7m5VKuIYCn178zB5qtE5V1PaHZsfN8zVMRJseSkPazDxT0QdnMRaYWlt1Q5DxRtesfyZ8YWxfj0SKcPteWS6AwRKMfjedwOCLBDS6jQ%25gTq2Ydw6ZuUXdptQ%25wc3bpjifZu%25KXhi7HSc3uBrqLsJdKX324mkVTQBrXpF7nAlZ24riI100scpF4HvVmN0KiIFJG4IMABHvIT9FogO2JGvloIfjgpT9GsLv7sUilo90yG1lbHsLoAC9VLhJ0yLOEo2tqTACygNzcimlOECUkaB17sgNEbnRxh10UkNh5xWlVAbnkq8WerzOh5nmPecsagq857Mj2lRUmP81D6lnxb7MPVYwXsWh1DMzt%25rjeqVYDafzo8jmztYRSaL667aftxdRMMw1RSfWQxy%25%25VxdSeZWJCuzWQdjce823aeZQ6KjPoXRjcZwBZvHrx6Kc%252cqJ4WwBKupK5jFe%252B3iBucIjup2XH2fwv63iprJp9eGwXHi4TfF99%25UHNMClix2t5JUABNItPb9FSrTLn9lVc%25s6l89RpC0vQFju1dWS2aOIXRTVcwL9cvtT7672yzH3OYgMTNICQmlDTI0Ccy2of4Y ">

Properties 

- car.name = BMW
- car.model = X6
- car.weight = 2445 kg
- car.color = grey

Methods

- car.start()
- car.drive()
- car.brake()
- car.stop()

<h3>Car Properties</h3>

A real life car has properties like weight and color.   
 Car objects have the same properties, but the values differ from car to car.<br>

<h3>Car Methods</h3>

A real life car has methods like start and stop:  
car.start(), car.drive(), car.brake(), car.stop().

Car objects have the same methods, but the methods are performed at different times.

<h3>Objects as variables</h3>

Objects are variables too. But objects can contain many values. This code assigns many values (BMW, X6, grey) to an object named car:

```
const car = {type: "BMW", model: "x6", color: "grey"};
```
⚠️ It is a common practice to declare objects with the `const` keyword.

<h3>JavaScript Object Definition</h3>

<h4>How to define a JavaScript Object</h4>

- Using an Object Literal
- Using the `new` keyword
- Using an Object Constructor 

<h5>JavaScript Object Literal</h5>

An object literal is a list of <b>name:value</b> pairs inside curly braces <b>{ }</b>.  

<b>{firstName: "Luanna", lastName:"Dias", age:19, eyeColor:"brown" 
}</b>

🔔 <b>name:value</b> pairs are also called <b>key:value</b>.

<h3>Creating a JavaScript Object</h3>

These examples create a JavaScript object with 4 properties:

```
const person = {firstName:"Luanna", lastName: "Dias", age:19, eyeColor: "brown"};
```

this can also be written by:

```
const person = {  
    firstName: "Luanna",  
    lastName: "Dias",   
    age: 19,   
    eyeColor: "brown",  
    };
```

This example creates an empty JavaScript object, and then adds 4 properties:  

```
 // Create an Object
const person = {};

// Add Properties
person.firstName = "Luanna";
person.lastName = "Dias";
person.age = 19;
person.eyeColor = "brown";
```

<h3>Using the new keyword</h3>
This example create a new JavaScript object using , and then adds 4 properties: new Object( )

```
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "Luanna";
person.lastName = "Dias";
person.age = 19;
person.eyeColor = "brown";
```
<h2>Object Properties</h2>
The named values, in JavaScript objects, are called properties:

|Property|Value|
|---|---|
|firstName| Luanna|
|lastName| Dias|
|age| 19|
|eyeColor| brown|

<h2>Accessing Object Properties</h2>
You can access object properties in two ways:

>objectName.propertyName

>objectName["propertyName"]

<h2>JavaScript Object Methods</h2>
Methods are actions that can be perfomed on objects.  
Methods are function definitions stored as property values.  

```
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
In the example above, refers to the person object: `this`

`this.firstName` means the <b>firstName</b> property of person.   
`this.lastName` means the <b>lastName</b> property of person.

# ‼️
<b>Objects</b> are containers for <b>Properties</b> and <b>Methods</b>.  

<b>Properties</b> are named <b>Values</b>.  

<b>Methods</b> are <b>Functions</b> stored as <b>Properties</b>.

<b>Properties</b> can be primitive values, functions, or even other objects.

<h2>JavaScript Primitives</h2>

A <b>primitive values</b> is a value that has no properties or methods.

<b>4.52</b> is a primitive value.  

A <b>primitive data type</b> is data that has a primitive value.  

JavaScript defines 7 types of primitive data types:
 
 - string
 - number
 - boolean
 - null
 - undefined
 - symbol
 - bigint

<h3>Immutable</h3>
Primitive values are immutable (they are hardcoded and cannot be changed).<br>
If x = 4.52, you can change the value of x, but you cannot change the value of 4.52.<br>

|value|type|comment|
|---|---|---|
|"Hello"|string|"Hello" is always "Hello|
|4.52|number|4.52 is always 4.52|
|true|boolean|true is always true|
|false|boolean|false is always false|
|null|null(object)|null is always null
|undefined|undefined|undefined is always undefined|

<h2>JavaScript Objects are Mutable</h2>
Objects are mutable: They are addressed by reference, not by value.  
 
If person is a object, the following statements will not create a copy of person:

>const x = person;

The object x is not a copy of person. The object x is person. The object x and the object person share the same memory address. Any changes to x will also change person:

```
//Create an Object
const person = {
  firstName:"Luanna",
  lastName:"Dias",
  age:19, eyeColor:"brown"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 20;
```

<h2>JavaScript Object Properties</h2>
<h3>Acessing JavaScript Properties</h3>
The syntax for accessing the property of an object is:

```
// objectName.property
let age = person.age;
```
or
```
// objectName["property"]
let age = person["age"];
```
or
```
// objectName[expression]
let age = person[x];
```

<h3>Adding New Properties</h3>
You can add new properties to an existing object by simply giving it a value:<br>

>person.nationality = "English";

<h3>Deleting Properties</h3>

The `delete` keyword deletes a property from a object:

> delete person.age;

or
>delete person["age"];

⚠️The `delete` keyword deletes both the value of the property and the property itself. After deletion, the property cannot be used before it is added back again.

<h3>Nested Objects</h3>

Property values in an object can be other objects:

```
myObj = {
    name: "Luanna",
    age: 19,
    myCars: {
        car1:"BMW"
        car2:"Volvo"
        car3:"Audi"
    }
}
```
You can access nested objects using the dot notation or the bracket notation:

>myObj.myCars.car2;

>myObj.myCars["car2"];

>myObj["myCars"]["car2"];

>let p1 = "myCars";  
>let p2 = "car2";  
>myObj[p1][p2];  

<h2>JavaScript Object Methods</h2>
<b>Object methods</b> are actions that can be perfomed on objects.<br>
A method is a function definition stored as a property value.<br>

|property|value|
|---|---|
|firstName|Luanna|
|lastName|Dias|
|age|19|
|eyeColor|brown|
|fullName|function(){return this.firstName + " " + this.lastName;}

<h3>Accesing object methods</h3>
You access an object method with the following syntax:

>objectName.methodName()

If you invokes the fullName property with (), it will execute as a function:

example
```
name = person.fullName();
```
If you access the fullName property without (), it will return the function definition:

```
name = person.fullName;
```

<h3>Adding a Method to an Object</h3>
Adding a new method to an object is easy:

```
person.name = function() {
  return this.firstName + " " + this.lastName;
};
```
<h3>Using JavaScript Methods</h3>

This example uses the JavaScript `toUpperCase()` method to convert a text to uppercase:

```
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
```
