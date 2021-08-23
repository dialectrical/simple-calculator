import React from 'react';
import ButtonBank from './buttonBank.js';
import { Container, TextField, Grid, ButtonGroup, Button } from '@material-ui/core';


const NUM_BUTTON = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const MATH_OPERATOR = ["+", "-", "*", "/"];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedInput: "",
      workingInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.currentTarget.value === "=" && this.state.workingInput) {
      this.setState({workingInput: eval(this.state.workingInput)});
    } else if ((MATH_OPERATOR.includes(event.currentTarget.value) || event.target.value === "0") && !this.state.workingInput) {
      return;
    } else if (MATH_OPERATOR.includes(event.currentTarget.value) && this.state.workingInput.endsWith(event.target.value)) {
      return;
    } else {
      let input = event.currentTarget.value;
      console.log(event.currentTarget.value);
      this.setState({workingInput: this.state.workingInput + input});
    }
  }

  render() {
    return (
      <div>
        <Container maxWidth={"md"}>
        <Grid container fixed spacing={1}>
          <Grid item xs={12} spacing={1} wrap={"nowrap"}>
            <TextField id="outlined-basic" size="medium" label={this.state.workingInput} disabled="true" variant="outlined" />
          </Grid>
          <Grid container item direction="row" xs={3} spacing={1}>
            {NUM_BUTTON.map(x => {
              return (
                  <Grid item xs={4} spacing={1}>
                  <Button
                    variant="contained"
                    value={x}
                    fullWidth="true"
                    onClick={this.handleChange}
                  >
                    {x}
                </Button>
                </Grid>)})
              }
              <Grid item xs={8} spacing={1}>
                <Button
                  variant="contained"
                  color="primary"
                  value={"="}
                  fullWidth="true"
                  onClick={this.handleChange}
                >
                  =
                </Button>
              </Grid>
            </Grid>
          <Grid container item direction="column" xs={3} spacing={1} wrap={"nowrap"}>
              {MATH_OPERATOR.map(x => {
                return (
                  <Grid item xs={4} spacing={1}>
                  <Button
                    color="secondary"
                    value={x}
                    onClick={this.handleChange}
                    fullWidth="true"
                    variant="contained"
                  >
                    {x}
                  </Button>
                  </Grid>)}
                )
              }
          </Grid>
          </Grid>
          </Container>
      </div>
    );
  }
}

export default Calculator;
