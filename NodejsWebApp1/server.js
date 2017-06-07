'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var json = JSON.stringify({
        from: 'node.js'
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(json);
}).listen(port);
