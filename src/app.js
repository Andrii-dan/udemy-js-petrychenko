'use strict';

// 1) You have an array with income data for each outlet. Write a getPositiveIncomeAmount function that takes this array of data and returns the sum of only the positive values ​​from each object.

const funds = [
	{ amount: -1400 },
	{ amount: 2400 },
	{ amount: -1000 },
	{ amount: 500 },
	{ amount: 10400 },
	{ amount: -11400 },
];

// Example:
// getPositiveIncomeAmount(funds) => 13300

const getPositiveIncomeAmount = (data) => {
	const result = data
		.filter((el) => el.amount > 0)
		.map((item) => item.amount)
		.reduce((a, b) => a + b);

	return result;
};

console.log(getPositiveIncomeAmount(funds));

// 2) Write a getTotalIncomeAmount function that also accepts this data array. If at least one of the objects contains a negative amount field value, then the function returns the sum of all values. (number) If there are no such values, the getPositiveIncomeAmount function is launched with the same data array.

// Example:
// getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
	const isSomefundNegative = data.some((el) => el.amount < 0);

	if (isSomefundNegative) {
		return data.map((item) => item.amount).reduce((a, b) => a + b);
	} else {
		return getPositiveIncomeAmount(data);
	}
};

console.log(getTotalIncomeAmount(funds));