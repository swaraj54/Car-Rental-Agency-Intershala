const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    mail: String,
    password: String

});

const suserSchema = new Schema({
    sname : String,
    smail : String,
    spassword : String
})

User = mongoose.model("User", userSchema);
sellUser = mongoose.model("sellUser", suserSchema);

exports.User = User;
exports.sellUser = sellUser;