const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    model:{type:String, required:true},
    number:{type:Number, required:true},
    seating:{type:Number, required:true},
    rent:{type:Number, required:true},
    image:{type:String, required:true}

});

module.exports = mongoose.model("Car", carSchema)