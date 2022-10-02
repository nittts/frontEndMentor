import { handleNumKeyPress, handleSymbolKeyPress, handleEqualKeyPress, handleCleanKeyPress } from "./scripts.js";

/* -------------------------------- DOM Keys -------------------------------- */

const zero_key = document.getElementById("zero");
const one_key = document.getElementById("one");
const two_key = document.getElementById("two");
const three_key = document.getElementById("three");
const four_key = document.getElementById("four");
const five_key = document.getElementById("five");
const six_key = document.getElementById("six");
const seven_key = document.getElementById("seven");
const eight_key = document.getElementById("eight");
const nine_key = document.getElementById("nine");

const plus_key = document.getElementById("plus");
const minus_key = document.getElementById("minus");
const times_key = document.getElementById("times");
const div_key = document.getElementById("div");
const dot_key = document.getElementById("dot");

const del_key = document.getElementById("del");
const reset_key = document.getElementById("reset");
const equal_key = document.getElementById("equal");

/* ------------------------------------ - ----------------------------------- */

zero_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});

one_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
two_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
three_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
four_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
five_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
six_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
seven_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
eight_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});
nine_key.addEventListener("click", (event) => {
  handleNumKeyPress(event);
});

/* ----------------------------------- // ----------------------------------- */

plus_key.addEventListener("click", (event) => {
  handleSymbolKeyPress(event);
});
minus_key.addEventListener("click", (event) => {
  handleSymbolKeyPress(event);
});
times_key.addEventListener("click", (event) => {
  handleSymbolKeyPress(event);
});
div_key.addEventListener("click", (event) => {
  handleSymbolKeyPress(event);
});
dot_key.addEventListener("click", (event) => {
  handleSymbolKeyPress(event);
});

/* ----------------------------------- // ----------------------------------- */

del_key.addEventListener("click", (event) => {
  handleCleanKeyPress(event);
});
reset_key.addEventListener("click", (event) => {
  handleCleanKeyPress(event);
});

/* ----------------------------------- // ----------------------------------- */

equal_key.addEventListener("click", (event) => {
  handleEqualKeyPress(event);
});

/* ------------------------------------ - ----------------------------------- */
