'use strict';

//first task
function greating(name) {
	return 'Hello' + ' ' + name;
}

console.log(greating('Joe'));

//second task
function returnNeighboringNumbers(number) {
	return [number - 1, number, number + 1];
}

console.log(returnNeighboringNumbers(53));

//third task
function getMathResult(firstNum, secondNum) {
	let str = '---';
	let result = '';

	if (typeof secondNum !== 'number' || secondNum <= 0) {
		return firstNum;
	} else {
		for (let i = 1; i <= secondNum; i++) {
			if (i === secondNum) {
				result += firstNum * i;
			} else {
				result += firstNum * i + str;
			}
		}
		return result;
	}
}

console.log(getMathResult(20, 6));
