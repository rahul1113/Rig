
var app = require('express')();
var http = require('http').Server(app);
//import socket
var io=require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');
});
// I listen on the connection event for incoming sockets

io.on('connection',(socket) =>{
  console.log('a user connected');
  socket.on('disconnect',() => {
    console.log('a user disconnected');
  });
});

//Emitting events:-
//The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

// For client -> server communication I choosed simple text because it’s not necessary to wrap it in more complicated structure.


// But for server -> client it’s a bit more complex. We have to distinguish between 3 different types of message:

// server assigns a color to user
// server sends entire message history
// server broadcasts a message to all users
// Therefore every message is a simple JavaScript object encoded into JSON.



http.listen(3000, () => {
  console.log('listening on *:3000');
});