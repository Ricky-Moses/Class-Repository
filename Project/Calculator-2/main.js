const fieldSet = document.querySelector("fieldset");

const legend = fieldSet.querySelector("legend");
const outputPara = fieldSet.querySelector("p");

const calcBtn = document.querySelectorAll("section:last-of-type div");

// console.group("Data property");
// console.info("Fieldset: ", fieldSet);
// console.info("Legend: ", legend);
// console.info("Output: ", outputPara);
// console.info("Button: ", calcBtn);
// console.groupEnd();

let expression = "";

calcBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent.trim();

    // AC
    if (btnValue === "AC") {
      outputPara.textContent = "0";
      expression = "";
      return;
    }

    if (btnValue === "X") {
      expression = expression.slice(0, -1);
      outputPara.textContent = expression || "0";
      return;
    }

    if (btnValue === "=") {
      try {
        const result = Function(`"use strict"; return ${expression}`)();
        outputPara.textContent = result.toString();
        legend.textContent = expression;
        console.log(result);
      } catch {
        outputPara.textContent = "Error"
        expression = ""
      }

      return;
    }

    const lastChar = expression.slice(-1);
    const isOp = /[+\-*/]/.test(btnValue);
    const expressionOp = /[+\-*/]/.test(lastChar);

    if (isOp && expressionOp) return;

    if (btnValue === "." && /\.\d*$/.test(expression)) return;

    console.group("Operator and Number");
    console.info("Last Character: ", lastChar);
    console.info("Operator: ", isOp);
    console.info("Expression Operator: ", expressionOp);
    console.groupEnd();

    // Display output
    expression += btnValue;
    outputPara.textContent = expression;
  });
});
