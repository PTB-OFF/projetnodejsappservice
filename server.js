const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Node JS app on Azure App Service is working !');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
