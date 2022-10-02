let formula = "";

/* ------------------------------------ - ----------------------------------- */
// Functions

const handleNumKeyPress = (event) => {
  const { id, value } = event.target;

  if (formula === "0") {
    formula = value;
  } else {
    formula = formula + value;
  }

  handleUpdate(formula);
};

const handleSymbolKeyPress = (event) => {
  const { value } = event.target;

  formula = formula + value;
  handleUpdate(formula);
};

const handleCleanKeyPress = (event) => {
  const { id } = event.target;

  if (id === "reset") {
    formula = "0";
  }

  if (id === "del") {
    if (formula.length - 1 === 0) {
      formula = "0";
    } else {
      const str = formula.slice(0, -1);
      formula = str;
    }
  }
  handleUpdate(formula);
};

const handleEqualKeyPress = () => {
  const answer = eval(formula);
  formula = "0";
  handleUpdate(`${answer}`);
};

export { handleNumKeyPress, handleSymbolKeyPress, handleEqualKeyPress, handleCleanKeyPress };

/* ------------------------------------ - ----------------------------------- */

const displayLed = document.getElementById("display-led");

const handleUpdate = (text) => {
  displayLed.innerText = text.replace(/\*/g, "x").replace(/\./g, ",");
};

/* ------------------------------------ - ----------------------------------- */
