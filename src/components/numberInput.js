import React from 'react';

const NumInput = (input, num) => {
  if (input == 0 && num.length == 0) {
    return [];
  } else {
    return [...num].concat(input);
  }
}

export default NumInput;
