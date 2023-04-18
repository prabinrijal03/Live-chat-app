const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const db = require('./config/db');
const model = require('./model/user.model');


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});