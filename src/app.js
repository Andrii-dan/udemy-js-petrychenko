'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function () {
		console.log('test');
	},
};

// iterate through object
for (let key in options) {
	if (typeof options[key] === 'object') {
		for (let i in options[key]) {
			console.log(`Values ${i} is ${options[key][i]}`);
		}
	} else {
		console.log(`Values ${key} is ${options[key]}`);
	}
}

// get object length
console.log(Object.keys(options).length);

// custom method inside object
options.makeTest()
