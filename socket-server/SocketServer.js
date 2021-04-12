const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "PUT"]
    }
});

const { response } = require('express');
const dbmanager = require('./DatabaseManager');

io.on('connection', (socket) => {
    console.log("A client has connected... [ID: " + socket.id + "]");

    socket.on('execute', (msg) => {
        io.emit('execute', msg)
    });

    socket.on('data', (msg) => {
        socket.broadcast.emit('data', msg);
    });

    socket.on('dbData', (msg) => {
        socket.broadcast.emit('dbData', msg);
        dbmanager.updateData(msg);
    });

    socket.on('receive',() => {
        dbmanager.selectAllData((callback) => io.emit('receive', callback));
    });

    socket.on('disconnect', () => {
        console.log("A client has disconnected... [ID: " + socket.id + "]");
    });
});

http.listen(5000, () => {
    console.log('Socket server listening on port 5000...');
});