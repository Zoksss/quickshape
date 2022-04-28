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

class Room {
    constructor(leader) {
        this.leader = leader;
        this.player = "";
        this.isPlaying = false;
    }
}

let rooms = {};

io.on("connection", (socket) => {
    console.log("Made socket connection with id: " + socket.id);
    socket.on("startJoining", (nickname) => {
        socket.nickname = nickname;
        let room = searchForEmptyRoom();
        console.log(room);
        if (room) {
            // join socket
            socket.join(room.leader);
            rooms[room.leader].isPlaying = true;
            rooms[room.leader].player = socket.id;
            console.log("joined");
            io.in(room.leader).emit("startGame");
        } else {
            // create new room
            rooms[socket.id] = new Room(socket.id);
            socket.join(socket.id);
            console.log("created");
        }
    });
    socket.on("cancelSearch", () => {
        
    });
    socket.on("multiplayerDisconnect", () => {

    });
    socket.on("averageSend", time => {
        //io.to(rooms[0]).emit("averageShare", time);
        let room = searchForRoomWhereUser(socket.id);
        if(room){
           socket.to(room.leader).emit("averageShare", time);
        }
    });
});

const searchForEmptyRoom = () => {
    let isFound = null;
    for (const key in rooms) {
        if (rooms[key].isPlaying === false) {
            isFound = rooms[key];
            break;
        }
    }
    return isFound;
}

const searchForRoomWhereUser = (sockeid) => {
    let isFound = null;
    for (const key in rooms) {
        if (rooms[key].player == sockeid || rooms[key].leader == sockeid) {
            isFound = rooms[key];
            break;
        }
    }
    return isFound;
}