const mongoose = require('mongoose');

const tweetsSchema = mongoose.Schema({
    name: String,
    username: String,
    content: String,
    hashtag: String,
    creationDate: Date,
   });

   const Tweet = mongoose.model('tweets', tweetsSchema)

   module.exports = Tweet;