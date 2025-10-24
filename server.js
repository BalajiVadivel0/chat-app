const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.username = 'Anonymous';

    socket.on('chat message', (data) => {
        console.log('Message received:', data);
        
        if (!socket.usernameSet) {
            socket.username = data.user;
            socket.usernameSet = true;
            console.log(`${socket.username} joined the chat`);
            io.emit('system message', `${socket.username} has joined the chat`);
        }

        const messageData = {
            user: socket.username,
            message: data.message
        };
        
        console.log('Broadcasting message:', messageData);
        io.emit('chat message', messageData);
    });

    socket.on('disconnect', () => {
        if (socket.usernameSet) {
            console.log(`${socket.username} left the chat`);
            io.emit('system message', `${socket.username} has left the chat`);
        }
        console.log('A user disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});