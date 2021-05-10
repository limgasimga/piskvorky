"use strict"

let sign = "circle";
let signIcon = document.querySelector(".svg");

const game = (event) => {
  if (sign === "circle") {
    event.target.classList.add("board__field--circle");
    sign = "cross";
    signIcon.src = "image/cross.svg";
    event.target.disabled = true;
  } else if (sign === "cross") {
    event.target.classList.add("board__field--cross");
    sign = "circle";
    signIcon.src = "image/circle.svg";
    event.target.disabled = true;
  }
  
  if (isWinningMove(event.target)) {
    window.alert("Výhra!");
  }
};

let btnElm = document.getElementsByClassName("field__button");
let btnElmLength = btnElm.length

for (let i = 0; i < btnElmLength; i++) {
  btnElm[i].addEventListener('click', game);
};

const getSymbol = (field) => {
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

const boardSize = 10
const fields = document.querySelectorAll('.field__button') 

const getField = (row, column) => fields[row * boardSize + column]

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}
