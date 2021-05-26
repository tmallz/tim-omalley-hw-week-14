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

router.get('/editDeletePost/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id,{})
    .then((currentPost) => {
        if(!currentPost){
            res.status(404).json({message: 'Post not found'});
            return;
        }
        const post = currentPost.get({plain: true});

        res.render('editDeletePost', {post, loggedIn: true});
    })
    .catch((err) => {res.status(500).json(err)});
})

module.exports = router;