var express = require('express');
var router = express.Router();
require('../models/connection');
const Tweet = require('../models/tweets');

// GET all tweets
router.get('/', (req, res) => {
    Tweet.find()
    .then(data => {
        if (data) {
        res.json({result: true, tweets: data})
        }
        else {
        res.json({result: false});
        }
    })
});

//POST a new tweet
router.post('/', (req, res) => {
    const pattern = /#[a-z0-9]*/
    const hashtag = req.body.content.match(pattern);

    const newTweet = new Tweet ({
        name: req.body.name,
        username: req.body.username,
        content: req.body.content,
        hashtag: hashtag[0],
        creationDate: new Date(),
    })
    
    if (!req.body.content || req.body.content === '') {
        res.json({result: false, error: 'Cannot post empty tweet !'})
    }

    else {
        newTweet.save()
        .then(() => {
            res.json({result: true})
            console.log(newTweet);
        })
    }
})

//DELETE a tweet
router.delete('/:tweetId', (req, res) => {
    Tweet.deleteOne({_id: req.params.tweetId})
    .then(() => {
        res.json({result: true})
    })
})

module.exports = router;