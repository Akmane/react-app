import React, { Component } from 'react';

class Label extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var data = this.props.data;
        const labelItems = Object.keys(data).map((key) => 
            <React.Fragment>
            <label>{key.charAt(0).toUpperCase() + key.substr(1)} : {data[key]}</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
        )
        return (
            <div>
            {labelItems}
            </div>
        )
    }
}

export default Label;