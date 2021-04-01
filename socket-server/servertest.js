const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "PUT"]
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    socket.on('execute', (msg) => {
        io.emit('execute', msg)
    });

    socket.on('data', (msg) => {
        socket.broadcast.emit('data', msg);
    });

});

http.listen(5000, () => {
    console.log('listen on port 5000');
});