const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    idCard: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },

})

module.exports = mongoose.model("users", userSchema);