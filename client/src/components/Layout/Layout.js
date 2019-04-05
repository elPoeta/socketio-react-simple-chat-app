import React, { Component } from 'react'
import io from 'socket.io-client';
import { END_POINT } from '../../utils/urls';
import Login from '../auth/Login';
import Chat from '../chat/Chat';
import './Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            user: null
        }
    }

    componentDidMount() {
        this.initSocket();

    }
    componentDidUpdate() {
        this.state.socket.on('get user', data => {
            this.addUser(data);
        });
    }
    initSocket = () => {
        const socket = io(END_POINT);
        this.setState({ socket });
        console.log('connected...');
    }

    addUser = data => {
        console.log(data);
        this.setState({ user: data.user });

    }
    render() {
        const { title } = this.props;
        const { socket, user } = this.state;
        return (
            <div className="container">
                <h1>{title}</h1>
                {!user ? <Login socket={socket} /> :
                    <Chat
                        user={user}
                        socket={socket}
                    />
                }
            </div>
        )
    }
}

export default Layout;