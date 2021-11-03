export function CalculatorObject() {
  this.firstNum = "";
  this.secondNum = "";
  this.operation = "";
  this.solved = 0;

  this.inputNum = (num) => {
    if (this.solved === 1) {
      this.solved === 0;
      this.operation === "";
    }
    if (this.operation === "") {
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
    this.status = 1;
    return (this.fistNum = output);
  };

  this.clear = () => {
    if (this.secondInput === "") {
      return this.clearEverything();
    } else {
      return (this.secondInput = "");
    }
  };

  this.clearEverything = () => {
    this.operation = "";
    this.firstInput = "";
    this.secondInput = "";
  };
}
