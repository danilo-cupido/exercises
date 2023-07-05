const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const productValue = product.value;
	const qtyValue = qty.value;
	addProduct(productValue, qtyValue);
	product.value = '';
	qty.value = '';
});

const addProduct = (product, quantity) => {
	const newLI = document.createElement('li');
	newLI.innerText = `${product} ${quantity}`;
	list.insertAdjacentElement('beforeend', newLI);
};
