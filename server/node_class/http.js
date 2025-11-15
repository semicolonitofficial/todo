const http = require("http");
// Create a server object

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "X-Powered-By": "Node.js",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Set-Cookie": "sessionid=abc123; HttpOnly",
  });
  res.end("Hello, World!");
});

server.listen(8000, "localhost", () => {
  console.log("Server running at http://localhost:${8000}/");
});
