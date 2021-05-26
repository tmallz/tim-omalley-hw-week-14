const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Post, User, Comment} = require('../models');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        include: [User, {
            model: Comment,
            include: [User],
        }],
        where: {
            user_id: req.session.user_id,
        }
    })
    .then((userPosts) => {
        const posts = userPosts.map((post) => post.get({plain: true}))
        
        res.render('dashboard', {posts, loggedIn: true});
    })
    .catch((err) => {res.status(500).json(err)})
})

router.get('/create', withAuth, (req, res) => {
    res.render('newPost');
})

module.exports = router;