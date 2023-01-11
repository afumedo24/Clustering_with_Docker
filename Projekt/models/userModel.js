const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: [true, "User must have a Username"],
        unique: true,
    },
    password: {
        type: String, 
        require: [true, "User must have a Password"],       
    },
});

const User = mongoose.model("User" , userSchema);
module.exports = User;
