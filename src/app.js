'use strict';

const films = [
	{
		name: 'Titanic',
		rating: 9,
	},
	{
		name: 'Die hard 5',
		rating: 5,
	},
	{
		name: 'Matrix',
		rating: 8,
	},
	{
		name: 'Some bad film',
		rating: 4,
	},
];

function showGoodFilms(arr) {
	return arr.filter((el) => el.rating >= 8);
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
	return arr.map((el) => el.name).join(', ');
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
	return arr.map((el, index) => {
		return { ...el, id: index };
	});
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.map((el) => Object.keys(el)).every((el) => el.includes('id'));
}

console.log(checkFilms(tranformedArray));
