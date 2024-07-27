const express = require('express')
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: [
		"https://yourdomain1.com:*",
		"https://yourdomain2.com:*"
	],
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket)=>{
    console.log(`User Connected: ${socket.id}`);

    socket.on('Channel 1', (message)=>{
        io.emit('Channel 1', message)
    })

    socket.on('Channel 2', (message)=>{
        io.emit('Channel 2', message)
    })
})


server.listen(13000, ()=> {
    console.log("Server is running...");
})
