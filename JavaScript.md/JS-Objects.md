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

These examples create a JavaScript object with