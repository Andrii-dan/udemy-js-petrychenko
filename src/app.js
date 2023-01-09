'use strict';

const arr = []

for (let i = 0; i < 5; i++) {
	arr.push('*')
	console.log(arr.join(""));
} 

let tree = '';

for ( let i = 1; i < 7; i++) {
	
	for (j = 1; j < i; j++) {
		tree += '*'
	}

	tree += '\n'
}

console.log(tree);
