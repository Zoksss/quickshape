const socketio = require("socket.io");
const express = require("express");

// App setup
const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT);

// Static files
app.use(express.static("public"));

// Socket setup
const io = socketio(server);

io.on("connection", (socket) => {
    console.log("Made socket connection with id: " + socket.id);
});