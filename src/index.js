import { createServer } from "node:http";

createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS',
  }
  if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
    return;
  }
  res.end("Hello World\n");
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
}); 