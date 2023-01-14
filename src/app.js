'use strict';

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('How much movies did you watched?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('How much movies did you watched?', '');
// 	}
// }

// start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('One of last movies that you watched...', '');
// 		const b = prompt('How do you evaluate it?', '');

// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log("It's too low");
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log("It's ok");
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log('Great!');
// 	} else {
// 		console.log('error');
// 	}
// }

// detectPersonalLevel();

// function showMyDB() {
// 	if (!personalMovieDB.privat) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB();

// function writeYourGenres() {
// 	for (let i = 0; i < 3; i++) {
// 		const a = prompt(`What is your favourite genre #${i+1}?`);
// 		personalMovieDB.genres[i] = a;
// 	}
// }

// writeYourGenres();

// console.log(personalMovieDB);

function calculateVolumeAndArea(sideLength) {
	let volume;
	let area;

	if (
		typeof sideLength !== 'number' ||
		sideLength <= 0 ||
		!Number.isInteger(sideLength)
	) {
		return 'something went wrong!';
	} else {
		volume = Math.pow(sideLength, 3);
		area = Math.pow(sideLength, 2) * 6;
		return `volume of the cube: ${volume}, \narea of the cube: ${area}`;
	}
}

console.log(calculateVolumeAndArea(15));

function getCoupeNumber(number) {
	let compartment;
	if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
		return 'Something went wrong! Please check entered number';
	} else if (number === 0 || number > 36) {
		return `Place with entered number doesn't exist!`;
	} else {
		compartment = Math.ceil(number / 4);
		return compartment;
	}
}

console.log(getCoupeNumber(37));