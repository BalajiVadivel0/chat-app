const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.username = 'Anonymous';

    socket.on('chat message', (data) => {
        if (!socket.usernameSet) {
            socket.username = data.user;
            socket.usernameSet = true;
            io.emit('system message', `${socket.username} has joined the chat`);
        }

        io.emit('chat message', {
            user: socket.username,
            message: data.message
        });
    });

    socket.on('disconnect', () => {
        if (socket.usernameSet) {
            io.emit('system message', `${socket.username} has left the chat`);
        }
        console.log('A user disconnected');
    });
});

http.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
