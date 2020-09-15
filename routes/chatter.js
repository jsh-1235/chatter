'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var messages = [];

/* GET chatter page. */
router.get('/', function (req, res) {
    var root = path.resolve();

    var filename = root + "/public/html/chatter.html"

    fs.readFile(filename, function (error, data) {
        messages = [];

        res.send(data.toString());
    });
});

router.get('/messages', function (req, res) {
    res.send(messages);
});

router.post('/messages', function (req, res) {
    var name = req.param('name');

    var content = req.param('content');

    var message = {
        name: name,
        content: content
    };

    messages.push(message);

    res.send({
        message: '데이터를 추가하였습니다.',
        data: message
    })
});


module.exports = router;

// Reverse Ajax란 서버에서 원하는 경우에 클라이언트에게 데이터를 제공하는 방법이다.
// node.js의 socket.io 모듈을 사용하면 Streaming과 Long Polling을 간단하게 구현할 수 있다.