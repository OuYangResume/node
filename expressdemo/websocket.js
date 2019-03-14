const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 8085 });


wsServer.on('connection', function(socket) {
  //每一个socket都有一个唯一的ID属性
  console.log(socket)
  console.log('客户端连接成功')
  //监听对方发过来的消息
  socket.on('message', function(message) {
    console.log('接收到客户端的消息', message)
    socket.send('服务器回应:' + message)
  })
})