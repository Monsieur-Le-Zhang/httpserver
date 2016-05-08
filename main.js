/**
 * Created by lzhang on 16-05-07.
 */

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');