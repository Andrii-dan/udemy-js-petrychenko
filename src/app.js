'use strict';

const numberOfFilms = +prompt('How many movies did you watch?', '');
const lastWatchedMovies = prompt('Some many movies that you watch?');
const movieRating = prompt('How do you evaluete them?');

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

personalMoviesDB.movies[lastWatchedMovies] = movieRating;

console.log(personalMoviesDB);
