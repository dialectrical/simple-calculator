function CalculatorObject() {
  this.firstNum = "";
  this.secondNum = "";
  this.operation = "";
  this.solved = 0;

  this.inputNum = (num) => {
    if (this.solved === 1) {
      this.clearEverything();
    }
    if (this.operation === "") {
      return (this.firstNum = this.firstNum + num);
    } else {
      return (this.secondNum = this.secondNum + num);
    }
  };

  this.decimal = () => {
    //add a decimal point to current input. If no input yet, set input to "0.". Multiple decimal points in same number should not be allowed.
  };

  this.negative = () => {
    if (this.firstNum !== "" && this.operation === "") {
      if (parseFloat(this.firstNum) > 0) {
        return (this.firstNum = "-" + this.firstNum);
      }
      return (this.firstNum = this.firstNum.slice(1));
    }
    if (this.secondNum !== "" && this.operation !== "") {
      if (parseFloat(this.secondNum) > 0) {
        return (this.secondNum = "-" + this.secondNum);
      }
      return (this.secondNum = this.secondNum.slice(1));
    }
  };

  this.chooseOperation = (operation) => {
    if (this.firstNum === "") {
      return;
    }
    return (this.operation = operation);
  };

  this.calculate = () => {
    if (this.secondNum === "") {
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
    this.solved = 1;
    return (this.firstNum = "" + output);
  };

  this.clear = () => {
    if (this.secondNum === "") {
      return this.clearEverything();
    } else {
      return (this.secondNum = "");
    }
  };

  this.clearEverything = () => {
    this.operation = "";
    this.firstNum = "";
    this.secondNum = "";
    this.solved = 0;
    return;
  };
}

let test = new CalculatorObject();
test.inputNum("5");
test.inputNum("0");
test.chooseOperation("*");
test.inputNum("2");
test.calculate();
console.log(test.firstNum);
test.calculate();
test.calculate();
console.log(test.firstNum);
test.inputNum("5");
test.inputNum("0");
test.chooseOperation("*");
test.inputNum("2");
test.calculate();
console.log(test.firstNum);
test.calculate();
test.calculate();
console.log(test.firstNum);
