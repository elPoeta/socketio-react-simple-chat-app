import React, { Component } from 'react';
import Layout from './Layout/Layout';
//import './App.css';

class App extends Component {

  render() {
    return (
      <Layout
        title='Missus'
      />
    );
  }
}

export default App;
 /*constructor(props) {
 super(props);
 this.state = {
   nick: 'invited',
   message: '',
   messages: [],
   users: [],

 };
 this.socket = io.connect(END_POINT);
 this.socket.on('recive message', data => {
   addMessage(data);
 });
 const addMessage = data => {
   console.log(data);
   this.setState({ messages: [...this.state.messages, data.msg] });
   console.log(this.state.messages);
 }
}
onChange = e => {
 this.setState({
   [e.target.name]: e.target.value
 });
}
onSubmit = e => {
 e.preventDefault();
 this.socket.emit('send', this.state.message);
 this.setState({
   message: ''
 })
}*/