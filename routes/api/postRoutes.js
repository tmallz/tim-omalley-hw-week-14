const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {Post, User, Comment} = require('../../models');

router.post('/', withAuth, (req, res) => {
    console.log('we are in the route');
    Post.create({
        title: req.body.title,
        body: req.body.body, 
        user_id: req.session.user_id,
    })
    .then((newPost) => res.json(newPost))
    .catch((err) => {res.status(500).json(err)})
});

module.exports = router;