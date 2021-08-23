import React from 'react';

const Evaluate = (x, operator, y) => {
  let stringEval = x.toString() + " " + operator + " " + y.toString();
  return eval(stringEval);
}

export default Evaluate;
