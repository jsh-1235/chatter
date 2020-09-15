var ws = require('ws');

module.exports = function (server) {

    //const websocket = new ws.Server({ server: server });

    const websocket = new ws.Server({ port: 50000 });

    console.log("통신을 시작합니다.");

    websocket.on('connection', function (ws, req) {
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        console.log(ip + "클라이언트로 부터 접속 요청");

        ws.on('message', function (message) {
            console.log("message : %s %s", message, req.connection.remoteAddress);

            ws.send("echo : " + message);
        });

        ws.on('error', function (error) {
            console.log("error : " + error);
        });

        ws.on('close', function () {
            console.log(ip + " : 클라이언트로 부터 접속이 끊어 졌습니다.");
        });
    });
}