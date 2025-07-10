// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const path = require('path');
// const mimetypelookup = require("mime-types").lookup;

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     let filepath = parsedUrl.pathname;

//     if (filepath === "/") {
//         filepath = "/index.html";
//     }

//     const fullPath = path.join(__dirname, 'apple', filepath);

//     fs.readFile(fullPath, (err, content) => {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end("404 Not Found");
//         } else {
//             const mime = mimetypelookup(fullPath) || 'application/octet-stream';
//             res.writeHead(200, { 'Content-Type': mime });
//             res.end(content);
//         }
//     });
// });

// server.listen(3000, () => {
//     console.log("✅ Server is running at http://localhost:3000");
// });
const express = require("express");
const app = express();
app.listen(7777,(err) => {
    console.log("listening to port 7777");
});

app.use(express.static("apple"));