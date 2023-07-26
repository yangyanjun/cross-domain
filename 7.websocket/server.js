// let express = require('express');
// let app = express();
let WebSocket = require('ws');

let wss = new WebSocket.Server({port: 3000});
wss.on('connection', function(ws) {
    ws.on('message', function(data) {
        console.log(data); // 5.2.0版本接收数据正常；最新版接收到的是个Buffer 后续再研究
        ws.send('我不爱你');
    })
    ws.on('upgrade', function(data){
        console.log(data)
    })
})