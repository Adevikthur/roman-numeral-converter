const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const cleartBtn = document.getElementById("clear-btn");
const output = document.getElementById("output");
const warningText = document.getElementById("warning-text");

convertBtn.addEventListener("click", () => {
  let num = parseInt(number.value);
  if (!num) {
    output.textContent = ``;
    warningText.textContent = "Please enter a valid number";
    return;
  }
  if (num < 1) {
    output.style.display = none;
    warningText.textContent = ``;
    ("Please enter a number greater than or equal to 1");
    return;
  }
  if (num >= 4000) {
    output.textContent = ``;
    warningText.textContent =
      "Please enter a number less than or equal to 3999";
    return;
  }
  warningText.textContent = ``;
  output.textContent = convertToRoman(num);
});

cleartBtn.addEventListener("click", () => {
  number.value = "";
  output.textContent = "";
  warningText.textContent = "";
});

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
};
