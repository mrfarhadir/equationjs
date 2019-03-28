# Equation

Package includes equations of:
[Line](#line)

### Installation:
```
npm install equationjs --save
```
### Test:
```
npm run test
```
# Line

$$
 y=mx+b 
$$
#### Methods:
- **`crossTwoPoint`**
> This method creates line equation which is crossing from two point that is given as two parameter for function.

**Example:**
```javascript
	let Line = require('equationjs').Line
    let line = new Line()
    let A = {x: 0, y: 0}
    let B = {x: 2, y: 2}
    let  y  =  line.crossTwoPoint(A, B)
    console.log(line) // Line { m: 3, b: -2 }
    console.log(y(5)) // 5
```
- **`distanceFromPoint`**
> This method calculates created line distance from a given point.
> this function also has a static version that takes point, m and b

**Example:**
```javascript
	//we could created line in different methods
	//here we create line from two point and then calculate line distance from point C
	let Line = require('equationjs').Line
    let line = new Line()
    let A = {x: 0, y: 0}
    let B = {x: 2, y: 2}
    let C = {x: 16, y: 4}
    line.crossTwoPoint(A, B)
    let d = line.distanceFromPoint(C)
    console.log(d) // 6
```
**Example:**
```javascript
	//here we create line from with known m and b and then calculate line distance from point C
	let Line = require('equationjs').Line
    let line = new Line()
    line.create(1, 0)
    let C = {x: 16, y: 4}
    let d = line.distanceFromPoint(C)
    console.log(d) // 6
```
- **`angle`**
```static method```
> This method takes two created instance of line class and returns angle between them in degree

**Example:**
```javascript
	let Line = require('equationjs').Line
    let  line1  =  new  Line()
	line1.create(1, 0)
	let  line2  =  new  Line()
	line2.create(-1, 0)
	let t = Line.angle(line1, line2)
	console.log(t) //90
```
- **`twoLineDistance`**
```static method```
> This method takes two created instance of line class and returns distance between them

**Example:**
```javascript
	let Line = require('equationjs').Line
	let  line1  =  new  Line()
	line1.create(4, -3)
	let  line2  =  new  Line()
	line2.create(4, 10)
	let  d  =  Line.twoLineDistance(line1, line2)
	console.log(d) //4.913538149119954
```
- **`neighbors`**
> This method takes array of points around line and calculates their distance from line and average of all neighbors

**Example:**
```javascript
	let Line = require('equationjs').Line
	let  line  =  new  Line()
	line.create(4, -3)
	let  points  = [
		{x:  1, y:  3},
		{x:  4, y:  -2},
		{x:  -3, y:  0},
		{x:  3, y:  1},
		{x:  6, y:  6},
	]
	let  result  =  line.neighboors(points)
	console.log(result)
	/*
	{  
		list:[  
				-0.7559289460184544,  
				5.669467095138408,  
				-5.669467095138408,  
				3.0237157840738176,  
				5.669467095138408  
			],  
		sum: 7.937253933193771,  
		average: 1.5874507866387542  
	}
	*/
```
### road map for classes:
 - [x] Line
 - [ ] Quadratic
 - [ ] Polynomial


any question ?
[Ask It :)](http://mrfarhad.ir/#!/contact)

made with :heart: for you