const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
	const newColor = makeRandColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
	// in this case I can also use h1.textContent = newColor;
});

const makeRandColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	if ((r && g) <= 100 || (r && b) <= 100 || (g && b) <= 100) {
		h1.style.color = 'white';
	} else {
		h1.style.color = 'black';
	}
	return `rgb(${r}, ${g}, ${b})`;
};
