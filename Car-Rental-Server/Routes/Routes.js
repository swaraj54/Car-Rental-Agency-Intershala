const express = require('express');
const bouter = express.Router();

const Controller = require("../Controllers/Controller");


bouter.post("/login", Controller.login);
bouter.post("/register", Controller.register);
bouter.post("/selllogin", Controller.selllogin);
bouter.post("/sellregister", Controller.sellregister);

module.exports = bouter;