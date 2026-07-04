import { createServer } from "node:http";
import { createReadStream } from "node:fs";

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
  createReadStream("./assets/video.mp4")
    .pipe(res);
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
}); 