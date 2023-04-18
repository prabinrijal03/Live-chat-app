const mongoose = require('mongoose');
const db = require('../config/db');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const messageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    content: String
});
const userModel = db.model('user', userSchema);
const messageModel = db.model('message', messageSchema);

module.exports = messageModel;