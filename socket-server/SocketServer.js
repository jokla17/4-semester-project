const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "PUT"]
    }
});
const dbmanager = require('./DatabaseManager');

io.on('connection', (socket) => {
    console.log("A client has connected... [ID: " + socket.id + "]");

    socket.on('execute', (msg) => {
        if (!(msg instanceof String)) {
            dbmanager.selectSpecificData(null, (callback) => {
                msg.batchId = callback == null ? 1 : ++callback.BatchId;
                io.emit('execute', msg)
            });
        } else {
            io.emit('execute', msg)
        }
    });

    socket.on('data', (msg) => {
        io.emit('data', msg);
    });

    socket.on('dbData', (msg) => {
        socket.broadcast.emit('dbData', msg);
        dbmanager.updateData(msg);
    });

    socket.on('selectAllData', () => {
        dbmanager.selectAllData((callback) => io.emit('selectAllData', callback));
    });

    socket.on('selectSpecificData', (data) => {
        dbmanager.selectSpecificData(data, (callback) => io.emit('selectSpecificData', callback));
    });

    socket.on('disconnect', () => {
        console.log("A client has disconnected... [ID: " + socket.id + "]");
    });
});

http.listen(5000, () => {
    console.log('Socket server listening on port 5000...');
});