import React, { Component } from 'react';
import io from 'socket.io-client';
import { END_POINT } from './utils/urls';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log('ENDPOINT ', END_POINT)
    this.socket = io.connect(END_POINT);
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
