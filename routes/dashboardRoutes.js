const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Post, User, Comment} = require('../models');

router.get('/', withAuth, async (req, res) => {
    Post.findAll()
})

module.exports = router;