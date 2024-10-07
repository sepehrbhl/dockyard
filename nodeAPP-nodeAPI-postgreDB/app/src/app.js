const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('Hello from Docker!');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World from Docker! dddd\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from app!');
// });

// app.listen(3000, () => {
//   console.log('App is running on port 3000');
// });
