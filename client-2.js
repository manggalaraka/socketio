// const
//     io = require("socket.io-client"),
//     ioClient = io.connect("http://localhost:8000/test");

// ioClient.on("receiver broadcast", (msg) => console.info(msg.description));

const
  io = require("socket.io-client") 
  socket = io('http://localhost:8000', {
  	path: '/test'
  });

socket.on("receiver broadcast 1", function(data){ console.info(data.description); });

socket.on("receiver broadcast 2", function(data){ console.info(data.description); });