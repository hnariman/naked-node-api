const http = require("http");
const port = process.env.PORT || 3000;

const contentType = { "Content-Type": "application/json" };

const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, contentType);
    res.write("This is working naked API");
    res.end();
  } else {
    res.writeHead(404, contentType);
    res.end(`${req.url} not found`);
  }
});

server.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
