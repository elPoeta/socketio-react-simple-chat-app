const express = require("express");
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//require("./startUp/db")();
require("./startUp/parser")(app);
require("./startUp/routes")(app);
require('./webSocket/io')(io);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, err => {
    if (err) {
        console.error("Error to connect server ", err);
        process.exit(1);
    }
    console.log(`Server connected on port ${PORT}`);
});
