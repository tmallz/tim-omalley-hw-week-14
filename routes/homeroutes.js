const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Post, User, Comment} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      include: [User],
    }).then((allPosts) => {
      const posts = allPosts.map((post) => post.get({plain: true}))
      res.render('homepage', {
        posts,
        loggedIn: true
      });
    }) 
    .catch((err) => {res.status(500).json(err)});
});

router.get('/post/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    include: [User, {
      model: Comment,
      include: [User],
    }],
  }).then((currentPost) => {
    if (!currentPost){
      res.status(404).json({message: '404 post not found'});
    }
    
    const posts = currentPost.get({ plain: true });

    res.render('post', {
      posts,
      loggedIn: true
    });
  }) 
  .catch((err) => {res.status(500).json(err)});
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;