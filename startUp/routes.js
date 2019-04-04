const chatRoom = require('../routes/api/chatRoom');
module.exports = app => {
    app.use("/api/chat-room", chatRoom);
}