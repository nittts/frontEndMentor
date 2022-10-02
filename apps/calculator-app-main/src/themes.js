const themeOne = {
  mainBackground: "hsl(222, 26%, 31%)",
  keypadBackground: "hsl(223, 31%, 20%)",
  screenBackground: "hsl(224, 36%, 15%)",
  key1background: "hsl(225, 21%, 49%)",
  key1shadow: "hsl(224, 28%, 35%)",
  key2background: "hsl(6, 63%, 50%)",
  key2shadow: "hsl(6, 70%, 34%)",
  key3background: "hsl(30, 25%, 89%)",
  key3shadow: "hsl(28, 16%, 65%)",
  text1: "hsl(221, 14%, 31%)",
  text2: "hsl(0, 0%, 100%)",
};

const themeTwo = {
  mainBackground: "hsl(0, 0%, 90%)",
  keypadBackground: "hsl(0, 5%, 81%)",
  screenBackground: "hsl(0, 0%, 93%)",
  key1background: "hsl(185, 42%, 37%)",
  key1shadow: "hsl(185, 58%, 25%)",
  key2background: "hsl(25, 98%, 40%)",
  key2shadow: "hsl(25, 99%, 27%)",
  key3background: "hsl(45, 7%, 89%)",
  key3shadow: "hsl(35, 11%, 61%)",
  text1: "hsl(60, 10%, 19%)",
  text2: "hsl(0, 0, 100%)",
};

const themeThree = {
  mainBackground: "hsl(268, 75%, 9%)",
  keypadBackground: "hsl(268, 71%, 12%)",
  screenBackground: "hsl(268, 71%, 12%)",
  key1background: "hsl(281, 89%, 26%)",
  key1shadow: "hsl(285, 91%, 52%)",
  key2background: "hsl(176, 100%, 44%)",
  key2shadow: "hsl(177, 92%, 70%)",
  key3background: "hsl(268, 47%, 21%)",
  key3shadow: "hsl(290, 70%, 36%)",
  text1: "hsl(52, 100%, 62%)",
  text2: "hsl(52, 100%, 62%)",
};

/* ------------------------------------ - ----------------------------------- */

const handleColorSwap = (theme) => {
  const root = document.documentElement;

  root.style.setProperty("--main-background", theme.mainBackground);
  root.style.setProperty("--keypad-background", theme.keypadBackground);
  root.style.setProperty("--screen-background", theme.screenBackground);

  root.style.setProperty("--key-background", theme.key1background);
  root.style.setProperty("--key-shadow", theme.key1shadow);

  root.style.setProperty("--key-2-background", theme.key2background);
  root.style.setProperty("--key-2-shadow", theme.key2shadow);

  root.style.setProperty("--key-3-background", theme.key3background);
  root.style.setProperty("--key-3-shadow", theme.key3shadow);

  root.style.setProperty("--text-1", theme.text1);
  root.style.setProperty("--text-2", theme.text2);
};

/* ------------------------------------ - ----------------------------------- */

const radioOne = document.getElementById("themeOne");
const radioTwo = document.getElementById("themeTwo");
const radioThree = document.getElementById("themeThree");

radioOne.addEventListener("click", () => {
  handleColorSwap(themeOne);
});

radioTwo.addEventListener("click", () => {
  handleColorSwap(themeTwo);
});

radioThree.addEventListener("click", () => {
  handleColorSwap(themeThree);
});
