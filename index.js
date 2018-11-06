var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/manggalaraka/notifikasi_1', function(req, res){
  	res.send({ response: result}).status(200);
});


app.get('/manggalaraka/notifikasi_2', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var clients = 0;
io.on('connection', function(socket){
  clients++;
  io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});

  // When Connection create and release
  console.log('a user connected');

  //when Disconected
  socket.on('disconnect', function(){
      clients--;
      io.sockets.emit('broadcast',{ description: clients + '1 client is disconnected '});
      console.log('user disconnected');
  });

  // feature send data to client
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  	io.emit('receiver broadcast', { description: msg +" by manggalaraka",
  									status:true });
  });

  socket.broadcast.emit('hi');
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});

