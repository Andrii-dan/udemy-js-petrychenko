'use strict';

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
	}),
	headers: {
		'Content-Type': 'application/json',
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json))
