'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var messages = [];

/* GET webSocket page. */
router.get('/', function (req, res, next) {
    res.render('webSocket', { title: 'WebSocket' });
  });

module.exports = router;

// Reverse Ajax란 서버에서 원하는 경우에 클라이언트에게 데이터를 제공하는 방법이다.
// node.js의 socket.io 모듈을 사용하면 Streaming과 Long Polling을 간단하게 구현할 수 있다.