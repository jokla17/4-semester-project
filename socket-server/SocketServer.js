const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dbmanager = require('./DatabaseManager');

app.use('/', express.static('../web-app/dist/web-app'));

io.on('connection', (socket) => {
    console.log("A client has connected... [ID: " + socket.id + "]");

    socket.on('execute', (msg) => {
        if (!(msg instanceof String)) {
            dbmanager.selectSpecificData("batch_reports", null, (callback) => {
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

    socket.on('insertData', (msg) => {
        socket.broadcast.emit('insertData', msg);
        dbmanager.updateData('production_logs', { "BatchId": msg.BatchId, ...msg.Logs });
        delete msg.Logs;
        dbmanager.updateData('batch_reports', msg);
    });

    socket.on('selectAllData', () => {
        dbmanager.selectAllData((callback) => io.emit('selectAllData', callback));
    });

    socket.on('selectBatch', (data) => {
        dbmanager.selectSpecificData("batch_reports", data, (callback) => io.emit('selectBatch', callback));
    });

    socket.on('selectLogs', (data) => {
        dbmanager.selectSpecificData("production_logs", data, (callback) => io.emit('selectLogs', callback));
    });

    socket.on('disconnect', () => {
        console.log("A client has disconnected... [ID: " + socket.id + "]");
    });
});

http.listen(5000, () => {
    console.log('Socket server listening on port 5000...');
});