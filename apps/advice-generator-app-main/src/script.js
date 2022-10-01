import quoteAPI from "./requests.js";

const baseURL = "https://api.adviceslip.com/advice";
const api = new quoteAPI(baseURL);

/* ------------------------------ DOM elements ------------------------------ */

const advice_id = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const div_pattern = document.getElementById("div-pattern");
const quote_btn = document.getElementById("quote-btn");

/* ------------------------------------ - ----------------------------------- */

// Manage window resize div pattern
function manageDivPattern() {
  const desktopDiv = "../images/pattern-divider-desktop.svg";
  const mobileDiv = "../images/pattern-divider-mobile.svg";
  const width = window.innerWidth;

  if (width < 900) {
    div_pattern.src = mobileDiv;
  } else {
    div_pattern.src = desktopDiv;
  }
}

window.addEventListener("resize", manageDivPattern);

/* ------------------------------------ - ----------------------------------- */

// Fetch new Advice
async function setNewQuote() {
  let adviceObj = await api.fetchQuote();

  const { id, advice } = adviceObj.slip;

  advice_id.innerText = id;
  adviceText.innerText = advice;
}

quote_btn.addEventListener("click", setNewQuote);
setNewQuote();

/* ------------------------------------ - ----------------------------------- */
