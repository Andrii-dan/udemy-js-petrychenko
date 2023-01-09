'use strict';

//first task
const array1 = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < array1.length; i++) {
	result[i] = array1[i];
}

console.log(result);

//second task
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
	if (typeof data[i] === 'number') {
		data[i] *= 2;
	} else if (typeof data[i] === 'string') {
		data[i] += ' - done';
	}
}

console.log(data);

//third task
const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const data2 = [];

for (let i = 0; i < data1.length; i++) {
	data2[i] = data1[data1.length - (i + 1)];
}

console.log(data2);
