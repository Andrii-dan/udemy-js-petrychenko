'use strict';

const arr = [1, 2, 3, 6, 8];

arr.forEach((el, index, arr) => {
	console.log(`${el}: ${index} inside ${arr} array`);
});
