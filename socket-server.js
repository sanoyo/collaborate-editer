'use strict'

const socketIO = require('socket.io');
const ot = require('ot');
const roomList = {};

module.exports = function(server) {
    const str = 'This is a Markdown heading \n\n';
    const io = socketIO(server);

    io.on('connection', function(socket) {
        const socketIOServer = new ot.EditorSocketIOServer(str, [], '', function(socket, cb) {
            cb(true);
            // roomList[data.room] = socketIOServer;
        });

        socket.on('chatMessage', function(data) {
            io.emit('chatMessage', data);
        }) 
    })
}
