'use strict';

function copyObj(mainObj) {
	let objCopy = {};

	for (let key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 7,
	c: {
		x: 23,
		y: 54,
	},
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
newNumbers.c.x = 20;

console.log(numbers);

console.log(newNumbers);

const add = {
	d: 17,
	e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const array = ['a', 'b', 'c'];
const newArray = array.slice();

newArray[1] = 'test'

console.log(array);
console.log(newArray);
