import React, { Component } from 'react'
import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: ''
        }
        this.props.socket.on('recive message', data => {
            addMessages(data);
        })
        const addMessages = data => {
            this.setState({
                messages: [...this.state.messages, data]
            });
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.message)
        if (this.state.message) {
            console.log('send...')
            this.props.socket.emit('send message', {
                user: this.props.user,
                message: this.state.message,
                date: Date.now()
            })
            this.setState({
                message: ''
            });
        }
    }
    render() {
        const { message, messages } = this.state;
        const { user } = this.props;
        console.log('msgs : ', this.state.messages);
        const displayMessages = messages.map(msg => (
            <li key={Math.random()}><strong>{msg.user}: </strong>{msg.message}</li>
        ))
        return (
            <div>
                <h3>Welcome {user}</h3>
                <div className='chat-panel'>
                    <ul>
                        {displayMessages}
                    </ul>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        id='message'
                        name='message'
                        placeholder='Write Something...'
                        value={message}
                        onChange={this.onChange}
                    />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Chat;
