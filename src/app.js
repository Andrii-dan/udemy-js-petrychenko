'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const square = document.querySelectorAll('.square');

const oneSquare = document.querySelector('.square');

box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.height = '200px';

box.style.cssText = 'background: blue; width: 500px; height: 500px;';

btns[1].style.borderRadius = '50px';

// for (let i = 0; i < square.length; i++) {
// 	square[i].style.cssText =
// 		'background: pink; width: 40px; height: 40px; margin: 10px;';
// }

square.forEach(
	(item) =>
		(item.style.cssText =
			'background: pink; width: 40px; height: 40px; margin: 10px;')
);

// syntax to create a DOM element in js file
const div = document.createElement('div');

// to add a class for a DOM element
div.classList.add('black');

// to insert element in DOM (or inside DOM element) as last child
document.body.append(div);
// box.append(div);

// to insert element in DOM (or inside DOM element) as first child
document.body.prepend(div)

// to insert before specific element
square[1].before(div)

// to insert after specific element
square[1].after(div)

// to remove element from DOM
circles[1].remove()

// to replace one element with another
square[1].replaceWith(circles[0])

// to insert text inside DOM element
div.textContent = 'Hello World!'