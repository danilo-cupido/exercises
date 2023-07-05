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
	newLI.innerText = `${quantity} ${product}`;
	list.insertAdjacentElement('beforeend', newLI);
};

// SOLUTION #2:

// const form = document.querySelector('form');
// const ul = document.querySelector('#list');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const qty = form.elements.qty.value;
//   const product = form.elements.product.value;
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   ul.appendChild(li);
//   form.reset();
// });

// SOLUTION #3 :

// const form = document.querySelector('form');
// const list = document.querySelector('#list');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const productInput = form.elements.product;
//   const quantityInput = form.elements.qty;
//   addElement(productInput.value, quantityInput.value);
//   productInput.value = '';
//   quantityInput.value = '';
// });

// const addElement = (product, qty) => {
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   list.appendChild(li);
// }
