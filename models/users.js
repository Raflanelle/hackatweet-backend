const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: String,
    username: String,
    password: Number,
    token: String,
   });

   const User = mongoose.model('users', usersSchema)

   module.exports = User;