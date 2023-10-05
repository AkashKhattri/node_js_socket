const express = require('express')
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket)=>{
    console.log(`User Connected: ${socket.id}`);

    socket.on('Tuna Technology', (message)=>{
        io.emit('Tuna Technology', message)
    })

    socket.on('Shubha Om Company Pvt.Ltd', (message)=>{
        io.emit('Shubha Om Company Pvt.Ltd', message)
    })
    socket.on('Y2K', (message)=>{
        io.emit('Shubha Om Company Pvt.Ltd', message)
    })
})


server.listen(13000, ()=> {
    console.log("Server is running...");
})