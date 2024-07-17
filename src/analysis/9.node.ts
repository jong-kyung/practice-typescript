//* nodejs에서 모듈을 불러 사용할땐 node:모듈명 으로 사용하는 것을 권장한다.
import fs = require("node:fs");
import http = require("node:http");
import path = require("node:path");

const server = http
  .createServer((req, res) => {
    const id = setTimeout(() => {
      console.log("Hello");
    }, 1000);
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기 중입니다.");
  });

exports = server;
module.exports = server;
