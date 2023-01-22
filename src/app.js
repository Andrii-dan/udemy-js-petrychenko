'use strict';

// how to get elements from DOM
// by id - returns one element with entered id name
const box = document.getElementById('box');
console.log(box);

// by by tag name - returns all elements in DOM with entered tag
const btns = document.getElementsByTagName('button');
console.log(btns);

// by class - returns all elements that have entered class
const circles = document.getElementsByClassName('circle');
console.log(circles);

// by class, id, tag name and other selectros (similar to css selectors) returns nodeList with all elements that match entered value
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

// we can call methods on nodeList
hearts.forEach((el) => {
	console.log(el);
});

// returns one (first) element that match entered value
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
