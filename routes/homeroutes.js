const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Post, User, Comment} = require('../models');


router.get('/', withAuth, (req, res) => {
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

router.get('/dashboard', withAuth, async (req, res) => {
  res.render('dashboard', {
    loggedIn: true
  });
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