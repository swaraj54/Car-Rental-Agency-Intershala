const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./Routes/Car-routes");
const bouter = require("./Routes/Routes");
const router1 = require('./Routes/AddProduct-route')
var bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/CarRentalSore?retryWrites=true&w=majority")
.then(()=>console.log("Connected to Database"))
.then(()=> {app.listen(2323)})
.catch((err)=> console.log(err))

app.use("/cars", router);
app.use("/", bouter);
app.use("/cartproducts", router1)