import React from 'react';
import { Button } from '@material-ui/core';

const ButtonBank = ({ bank, click }) => {
  const buttons = bank.map(x => <Button value={x} color="primary" variant="contained" onClick={click}>{x}</Button>);
  return buttons;
};

export default ButtonBank;
