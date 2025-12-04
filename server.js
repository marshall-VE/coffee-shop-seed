const https = require('https');
const fs   = require('fs');
const handler = require('serve-handler');
const certs = {
  key : fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};
https.createServer(certs, (req, res) => handler(req, res, { public: '.' }))
  .listen(5501, () => console.log('https://localhost:5501 (HTTP/2 enabled)'));