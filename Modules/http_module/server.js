// //create server by http module
// const http = require("http");
// const port = 8000;
// const hostname = '127.0.0.1';

// const myServer = http.createServer((req, res) => {
//   res.end(
//     '<h1>hello i am your first server created by rafi added callback</h1>'
//   );
// });

// myServer.listen(port, hostname, () => {
//   console.log(`server run successfully at http://${hostname}:${port}`);
// });

// myServer.listen(3000, () => {
//   console.log('server run successfully at http://127.0.0.1:3000');
// });

//create server by http module with set status code and content type:
const http = require('http');
const port = 8000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { 'content-type': 'text/html' });
  res.write(
    '<h1>hello i am your first server created by rafi added callback</h1>'
  );
  res.write(
    '<h1>hello i am your first server created by rafi added callback</h1>'
  );
  res.write(
    '<h1>hello i am your first server created by rafi added callback</h1>'
  );
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`server run successfully at http://${hostname}:${port}`);
});
