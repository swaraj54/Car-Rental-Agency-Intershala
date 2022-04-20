const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    model:{type:String, required:true},
    number:{type:String, required:true},
    seating:{type:String, required:true},
    rent:{type:Number, required:true},
    image:{type:String, required:true}

});

module.exports = mongoose.model("Car", carSchema)