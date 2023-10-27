let result; // null or undefined
let inputNumber;
let operator;

const resultEl = document.querySelector(".result");

function inputResult(value) {
  result = value || "0";

  if (result.legth > 16) {
    resultEL.innerText = `${result.substring(0, 16)}...`;
  } else {
    resultEl.innerText = result;
  }

  resultEl.innerText = result;
}

function clickNumber(number) {
  if (result === "0") result = "";

  let numberValue = result + number;

  inputResult(numberValue);
}

function clickDel() {
  inputResult(result.substring(0, result.length - 1));
}

function clickOperator(_operator) {
  if (result === "0") {
    alert("숫자 먼저 누르라고! 괜찮아^^");
    return;
  }

  operator = _operator;
  inputNumber = result;
  console.log(operator);
  console.log(inputNumber);
  inputResult();
}

function clickEnter() {
  if (result === "0" || !inputNumber || !operator) {
    alert("숫자 눌러야지?? 괜찮아^^");
    return;
  }

  switch (operator) {
    case "+":
      result = +inputNumber + +result;
      inputResult(result + "");
      inputNumber = "";
      break;
    case "-":
      result = +inputNumber - +result;
      inputResult(result + "");
      inputNumber = "";
      break;
    case "*":
      result = +inputNumber * +result;
      inputResult(result + "");
      inputNumber = "";
      break;
    case "/":
      result = parseInt(+inputNumber / +result, 10);
      inputResult(result + "");
      inputNumber = "";
      break;
  }
}

inputResult();
