const fieldSet = document.querySelector("fieldset");
const calcBtn = document.querySelectorAll("section:last-of-type div");

const displayOutput = fieldSet.querySelector("p");
const legend = fieldSet.querySelector("legend");
let expression = "";

calcBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.info(btn.textContent.trim())
    const btnValue = btn.textContent.trim();

    if (btnValue === "AC") {
      expression = "";
      displayOutput.textContent = "0";
      return;
    }

    if (btnValue === "DEL") {
      expression = expression.slice(0, -1);
      displayOutput.textContent = expression || "0";
      return;
    }

    if (btnValue === "=") {
      try {
        const result = Function(`"use strict"; return ${expression}`)();
        legend.textContent = expression;
        displayOutput.textContent = result;
      } catch (err) {}

      return;
    }

    const lastChar = expression.slice(-1);
    const isOp = /[+\-*/]/.test(btnValue);
    const exOp = /[+\-*/]/.test(lastChar);

    if (isOp && exOp) return;

    if (btnValue === "." && /\.\d*$/.test(expression)) return;

    console.group("Calculate");
    console.info("Last character: ", lastChar);
    console.info("IsOp: ", isOp);
    console.groupEnd();

    expression += btnValue;
    displayOutput.textContent = expression;
  });
});
