'use strict';

// 1st task
for (let i = 5; i <= 10; i++) {
	console.log(i);
}

let num = 4;

do {
	num++;
	console.log(num);
} while (num < 10);

//second task
for (let j = 20; j >= 10; j--) {
	if (j === 13) {
		break;
	}
	console.log(j);
}

// third task
for (let i = 2; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//fourth task
for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let number = 2;

while (number < 16) {
	number++;
	if (number % 2 === 0) {
		continue;
	} else {
		console.log(number);
	}
}

//fifth task
let arr = [];

for (let i = 0; i <= 5; i++) {
	arr[i] = i + 5;
}
console.log(arr);
