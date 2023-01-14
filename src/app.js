'use strict';

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(amountOfminutes) {
	let time;
	let hours;
	let minutes;

	if (
		typeof amountOfminutes !== 'number' ||
		!Number.isInteger(amountOfminutes) ||
		amountOfminutes < 0
	) {
		return 'Ошибка, проверьте данные';
	}

	time = amountOfminutes / 60;
	hours = Math.trunc(time);
	minutes = ((time % 1) * 60).toFixed();

	let hoursStr =
		hours === 1
			? 'час'
			: hours <= 4 && hours >= 2
			? 'часа'
			: hours >= 5 && hours <= 10
			? 'часов'
			: 'часов';

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(154));

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

function findMaxNumber(a, b, c, d) {
	const arr = [a, b, c, d];

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			return 0;
		}
	}

	return Math.max(...arr);
}

console.log(findMaxNumber(1, -5, 6.6, 8));
