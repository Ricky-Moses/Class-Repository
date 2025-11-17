const legend = document.querySelector("fieldset legend");
const displayExpression = document.querySelector("fieldset p");

const calcBtn = document.querySelectorAll("section:last-of-type div");

let expression = "";

calcBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnVal = btn.textContent.trim();

    // All Clear
    if (btnVal === "AC") {
      displayExpression.textContent = "0";
      expression = "0";
      return;
    }

    // One by One delete
    if (btnVal === "X") {
      expression = expression.slice(0, -1);
      displayExpression.textContent = expression || "0";
      return;
    }

    // Equal to
    if (btnVal === "=") {
      try {
        const result = Function(`"use strict"; return ${expression}`)();

        displayExpression.textContent = result;
        legend.textContent = expression;
        console.info(result);
      } catch (err) {
        displayExpression.textContent = "Error";
        expression = "";
      }

      return;
    }

    const lastChar = expression.slice(-1);
    const isOp = /[+\-*/]/.test(btnVal);
    const isEx = /[+\-*/]/.test(lastChar);

    if (isOp && isEx) return;

    if (btnVal === "." && /\.\d*$/.test(expression)) {
      return;
    }

    expression += btnVal;
    displayExpression.textContent = expression;

    console.group("Calculation Information");
    console.info("Btn Values: ", btnVal);
    console.info("Expression: ", expression);
    console.info("lastChar: ", lastChar);
    console.groupEnd();
  });
});

// console.info(legend)
// console.info(displayExpression.textContent)
// console.info(calcBtn)
