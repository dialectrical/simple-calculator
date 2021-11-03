export function CalculatorObject() {
  this.firstNum = "";
  this.secondNum = "";
  this.currentInput = 1;
  this.operation = "";
  this.result;

  this.inputNum = (num) => {
    if (currentInput === 1) {
      return (this.firstNum = this.firstNum + num);
    } else {
      return (this.secondNum = this.secondNum + num);
    }
  };

  this.chooseOperation = (operation) => {
    if (this.firstNum === "") {
      return;
    }
    this.operation = operation;
    if (this.secondNum === "") {
      return (this.currentInput = 2);
    }

    return this.calculate;
  };

  this.calculate = () => {
    if (secondNum === "") {
      return;
    }
    let output;
    let num1 = parseFloat(this.firstNum);
    let num2 = parseFloat(this.secondNum);
    if (this.operation === "+") {
      output = num1 + num2;
    } else if (this.operation === "-") {
      output = num1 - num2;
    } else if (this.operation === "*") {
      output = num1 * num2;
    } else if (this.operation === "/") {
      output = num1 / num2;
    }
    return (this.result = output);
  };
}
