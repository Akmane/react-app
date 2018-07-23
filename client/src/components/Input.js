import React, { Component } from 'react';
class Input extends Component {
    defaultState =  {
        inputValues : null
    }
    constructor(){
        super();
        this.state = this.setState;
        this.clickedByInput = this.clickedByInput.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState(){
        this.setState(this.defaultState);
    }
    clickedByInput(e){
        this.setState({inputValues:e.target.value})
    }



  render() {
      //console.log(this.props.input)
      let value = '';
      if(this.state.inputValues){
          value = this.state.inputValues;
      }
      const input = this.props.input;
    return (
      <div className="input_component">
        <label>{input.label}</label>
        <br />
        <input type={input.type} name={input.name} placeholder={input.placeholder} id={input.name} onChange={this.clickedByInput} />
        {value}
      </div>
    );
  }
}

export default Input;
