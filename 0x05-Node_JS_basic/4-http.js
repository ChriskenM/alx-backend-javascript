const http = require('http');

// create server
const app = http.createServer((req, res) => {
  // palin text headder
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // send response body
  res.end('Hello Holberton School!');
});

// port to listen
app.listen(1245, () => {
  console.log('listening on port 1245');
});

// export
module.exports = app;
