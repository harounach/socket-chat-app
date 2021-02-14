const express = require("express");

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
