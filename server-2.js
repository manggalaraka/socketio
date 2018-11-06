const io = require('socket.io')({
  path: '/test',
  serveClient: false,
});

// either
const server = require('http').createServer();

io.attach(server, {
  pingInterval: 1000,
  pingTimeout: 500,
  cookie: false
});

server.listen(8000, function(){
  console.log('listening on *:8000');
});


server.on('connection', function(socket){
  // When Connection create and release
  console.info('a user connected');
  io.emit('receiver broadcast 1', { description: " by manggalaraka"});
});


// sends each client its current sequence number
setInterval(() => {
	 io.emit('receiver broadcast 2', { description: " oleh manggalaraka"});
}, 5000);