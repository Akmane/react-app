import React, { Component } from 'react';
class Input extends Component {
    defaultState =  {
        inputValues : null
    }
    constructor(props){
        super(props);
    }
    render() {
        var data = this.props.data;
        const InputItems = Object.keys(data).map((key) => 
            <React.Fragment><input type="text" name={key} value={data[key]} />
            <label>{key.charAt(0).toUpperCase() + key.substr(1)} </label>
            </React.Fragment>
            )
        return(
            {inputItems}
        )
  }
}

export default Input;
