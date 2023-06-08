function random() {
	var randomNumber = Math.floor(Math.random() * 6 + 1);
	console.log(randomNumber);
	if (randomNumber === 1) {
		document
			.querySelector(".dice .img1")
			.setAttribute("src", "./images/dice1.png");
	}
	if (randomNumber === 2) {
		document
			.querySelector(".dice .img1")
			.setAttribute("src", "./images/dice2.png");
	}
	if (randomNumber === 3) {
		document
			.querySelector(".dice .img1")
			.setAttribute("src", "./images/dice3.png");
	}
	if (randomNumber === 4) {
		document
			.querySelector(".dice .img1")
			.setAttribute("src", "./images/dice4.png");
	}
	if (randomNumber === 5) {
		document
			.querySelector(".dice .img1")
			.setAttribute("src", "./images/dice5.png");
	}
	if (randomNumber === 6) {
		document
			.querySelector(".dice .img1")
			.setAttribute("src", "./images/dice6.png");
	}

	var randomNumber2 = Math.floor(Math.random() * 6 + 1);
	console.log(randomNumber2);
	if (randomNumber2 === 1) {
		document
			.querySelector(".dice .img2")
			.setAttribute("src", "./images/dice1.png");
	}
	if (randomNumber2 === 2) {
		document
			.querySelector(".dice .img2")
			.setAttribute("src", "./images/dice2.png");
	}
	if (randomNumber2 === 3) {
		document
			.querySelector(".dice .img2")
			.setAttribute("src", "./images/dice3.png");
	}
	if (randomNumber2 === 4) {
		document
			.querySelector(".dice .img2")
			.setAttribute("src", "./images/dice4.png");
	}
	if (randomNumber2 === 5) {
		document
			.querySelector(".dice .img2")
			.setAttribute("src", "./images/dice5.png");
	}
	if (randomNumber2 === 6) {
		document
			.querySelector(".dice .img2")
			.setAttribute("src", "./images/dice6.png");
	}

	if (randomNumber > randomNumber2) {
		document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
	} else if (randomNumber < randomNumber2) {
		document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
	} else {
		document.querySelector("h1").innerHTML = "Draw!";
	}
}
