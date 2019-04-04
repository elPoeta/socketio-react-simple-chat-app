import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.socket = io.connect('http://localhost:5000');
  }

  render() {
    return (
      <div className="App">
        <h1>Chat Room</h1>
      </div>
    );
  }
}

export default App;
