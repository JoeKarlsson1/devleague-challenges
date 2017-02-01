const appendDomElements = (numBtns=1000) => {
	let root = document.getElementById("root");

	for (let i=0; i<=numBtns; i++) {
		let btn = document.createElement('button');
		btn.id = `btn${i}`;
		root.appendChild(btn);
	}
	root.style.paddingLeft = "10px";
}

const startTest = (numBtns=1000) => {
	let timer = document.getElementById("timer");
	let root = document.getElementById("root");
	root.innerHTML = '';

	let t0 = performance.now();
	appendDomElements(numBtns);
	let t1 = performance.now();

	timer.innerHTML = "Updating the DOM took " + (t1 - t0) + " milliseconds with " + numBtns + " DOM elements.";
}

const stopDefAction = (evt) => {
    evt.preventDefault();
    let numBtns = document.getElementById('numBtns').value;
    startTest(numBtns)
}

document.getElementById('submitBtn')
	.addEventListener('click', stopDefAction, false );