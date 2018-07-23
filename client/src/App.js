import React, { Component } from 'react';
//import Header from './components/Header';
import Input from './components/Input';
import './App.css';


class App extends Component {
  defaultState = {
    inputs : [
      {
        label : "First Name",
        type : "text",
        name : "fname",
        placeholder : "Enter First Name"
      },
      {
        label : "Last Name",
        type : "text",
        name : "lname",
        placeholder : "Enter Last Name"
      },
      {
        label : "Email Id",
        type : "text",
        name : "email",
        placeholder : "Enter Email ID"
      }
    ],
    data : 0,
    inputValues : null
  };
  constructor(){
    super();
    this.state = this.defaultState;
    this.baseState = this.state;
    this.clicked = this.clicked.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  resetState(){
    console.log("Hello - ",Input);
    
    this.setState(this.defaultState);
  }
  clicked(){
    let values = [];
    this.state.inputs.map((input) => {
      let inputBox = document.getElementById(input.name);
      values[input.name] = inputBox.value;
      return null;
    })
    this.setState({inputValues: values})
    //console.log("Value ",values);
    this.setState({data:this.state.data+1})
    //console.log("Node - ",this.state.data);
  }
  render() {
    console.log("This is state : ",this.state);
    let inputItem;
    inputItem = this.state.inputs.map(input => {
      return (
        <Input key={input.name} input={input} />
      )
    })
    let inputValueItem;
    if(this.state.inputValues){
      inputValueItem = this.state.inputs.map(input => {

        if(this.state.inputValues[input.name])
          return (
            <p><label>{input.label}</label> :  {this.state.inputValues[input.name]}</p>
          )
        return null;
      })
    }
    return (
      <div className="app_component">
        {inputItem}
        <button className="btn btn-sm btn-primary" onClick={this.clicked} >Submit</button>
        {inputValueItem}
        clicked {this.state.data}
        <button className="btn btn-sm btn-warning" onClick={this.resetState}>Reset</button>
      </div>
    );
  }
}

export default App;
