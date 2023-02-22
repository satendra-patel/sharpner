const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Satendra Patel');
  res.end();
});

server.listen(4000, () => {
  console.log('Satendra Patel');
});
