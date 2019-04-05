module.exports = io => {
    const connections = [];
    const users = [];
    io.on('connection', socket => {
        connections.push(socket);
        console.log(`Connected: ${connections.length} connections`);
        // console.log(`Users Connected: ${users.length} users`);
        socket.on('disconnect', () => {
            //   users.splice(users.indexOf(socket.userName), 1);
            connections.splice(connections.indexOf(socket), 1);
            // updateUsers();
            console.log(`Disconnected: ${connections.length} connections`);
            // console.log(`User Disconnected: ${users.length} users`);

        });
        socket.on('set user', data => {
            console.log('data :: ', data);
            io.emit('get user', data);
        });
        socket.on('send message', data => {
            io.sockets.emit('recive message', data);
        });
        // socket.on('send', data => {
        //     io.sockets.emit('recive message', {msg: data});  
        // });
        /*   socket.on('send message', data => {
              io.emit('new message', { msg: data, user: socket.userName });
          });
      
          socket.on('new user', (user, callback) => {
      
              callback(true);
              socket.userName = user;
              users.push(socket.userName);
              updateUsers();
          })
      
          function updateUsers() {
              io.sockets.emit('get users', users)
          } */

    });



}