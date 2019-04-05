import React, { Component } from 'react'
import './Login.css';

class Login extends Component {
    state = {
        user: ''
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.state.user) {
            console.log('submin ', this.state.user)
            this.props.socket.emit('new user', { user: this.state.user }, callback => {
                if (callback) {
                    console.log('succes')
                }
            });
        }
    }
    render() {
        const { user } = this.state;
        //   const { socket } = this.props;
        return (
            <div className="login">
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        name='user'
                        id='user'
                        placeholder="Your Nickname"
                        value={user}
                        onChange={this.onChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
