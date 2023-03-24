'use strict';

console.log('Request pending...');

const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Loading...');

		const product = {
			name: 'tv',
			price: 200,
		};

		resolve(product);
		// reject()
	}, 2000);
});

req
	.then((product) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				product.status = 'order';
				resolve(product);
			}, 2000);
		});
	})
	.then((data) => {
		data.modify = true;
		return data;
	})
	.then((data) => {
		console.log(data);
	})
	.catch(() => {
		console.error('Something went wrong');
	})
	.finally(() => {
        // works regardless of resolve or reject 
		console.log('Request finished');
	});
