import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';

const defaultState = {
    input : {
      name : "Akshay Mane",
      phone : "9619249577"
    },
      form : 'Label',
      updatedAt : new Date()
    };
class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.state.phoneBook = [];
    this.state.phoneBook.push(defaultState);
  }

  componentDidMount(){
    var newData = {};
    newData = {
      input : {
        name : "vaibhav Mane",
        phone : "9619449889"
      },
      form : 'Label',
      updatedAt : new Date()
    }
    //this.state.push(newData);
    this.setState(({ phoneBook : [...this.state.phoneBook, newData]}));
  }

  editForm(i){

  }

  addNewContact = (name, phone) => {
    var newData = {};
    newData = {
      name : "",
      phone : ""
    }
    //this.state.push(newData);
    this.setState(({ phoneBook : [...this.state.phoneBook, newData]}));
  }

  /*addNewInputContats = () => {
    return (
      <React.Fragment>
        <Input name="name" />
        <Input name="phone" />
        <
      </React.Fragment>
    )
  }*/

  render() {
    //console.log(this.state)
    let contacts = this.state.phoneBook;
    var data = [];
    for(var i = 0; i < contacts.length; i++){
      console.log("this is data  : ",contacts[i].input.name);
      var oneContact = '';
      if(contacts[i].form === 'Label' ){
        oneContact = <div><Label data={contacts[i].input} /><Button clickEvent={this.editForm(i)}  name="Edit"/></div> ;
      }else{
        oneContact = <div><Input data={contacts[i].input} /><Button clickEvent={this.saveForm(i)} name="Save"/></div> ;
      }
      data.push(oneContact);
    }
    return (
      <React.Fragment>
        <div>Hello</div>
        {data}
        <button onClick={this.addNewContact}>Add New Contact</button>
      </React.Fragment>
    )
  }

}

export default App;
