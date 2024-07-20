const mongoose = require('mongoose');

//schéma avec sous- document

//sous-document tweet
		const tweetSchema = mongoose.Schema({
			content: String,
			hashtag: String,
			creationDate: Date,
		});

//document principal user
const usersSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    token: String,
    tweet: tweetSchema,
   });

   const User = mongoose.model('users', usersSchema)

   module.exports = User;