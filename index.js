const express = require('express');
var app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
var hostname = '192.168.1.135';

app.use(express.static('client'));

app.get("/hola-mundo", function(req, res){
    res.status(200).send("Hola mundo desde una ruta");
});

var messages = [{
    id:1,
    text:"hello",
    nickname: "eke"
}];

io.on('connection', function(socket){
    console.log("The node with the IP: " + socket.handshake.address + " has been conected");
    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

/*Inicia el servidor de node.js */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});