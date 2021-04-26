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
};

let btnElm = document.getElementsByClassName("field__button");
let btnElmLength = btnElm.length

for (let i = 0; i < btnElmLength; i++) {
  btnElm[i].addEventListener('click', game);
};


