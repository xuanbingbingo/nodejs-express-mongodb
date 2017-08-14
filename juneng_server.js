var io = require('socket.io')();

io.on('connection', function (_socket) {
  console.log(_socket.id + ': connection');
  _socket.emit('news', { hello: 'world' });
  _socket.on('my other event', function (data) {
    console.log(data);
  });
  // _socket.on('message', function (msg) {
  //   console.log('Message Received: ', msg);
  //   _socket.broadcast.emit('message', msg);
  // });
});

exports.listen = function (_server) {
  return io.listen(_server);
};