import React, { Component } from 'react';
import io from 'socket.io-client';
import { END_POINT } from './utils/urls';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick:'invited',
      message: '',
      messages:[],
      users:[],

    };
    this.socket = io.connect(END_POINT);
    this.socket.on('recive message', function(data){
    addMessage(data);
});
const addMessage = data =>{
  console.log(data);
    this.setState({messages: [...this.state.messages, data.msg]});
    console.log(this.state.messages);
}
  }

onChange = e =>{
  this.setState({
    [e.target.name]:e.target.value
  });
}
onSubmit = e =>{
  e.preventDefault();
  this.socket.emit('send', this.state.message);
  this.setState({
    message:''
  })
}
  render() {
    const {message, messages, users} = this.state;
    const chat = messages.map(msg =>(
      <li>{msg}</li>
    ));
    return (
      <div className="App">
        <h1>Missus - Chat Room</h1>
        <div className="msg-panel">
        <ul>
        {chat}
        </ul>
        </div>
        <form onSubmit={this.onSubmit} >
        <input 
        id='message'
        name='message'
        type='text'
        className='input-send'
        value={message}
        onChange={this.onChange}
        />
        <button className='send-button'><i className="fas fa-location-arrow  send-button-icon"></i></button>
        </form>
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
