const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Comment} = require('../../models');

router.post('/', withAuth, (req, res) => {
    Comment.create({
        ...req.body,
        user_id: req.session.user_id,
    })
    .then((newComment) => res.json(newComment))
    .catch((err) => res.status(500).json(err))
})

module.exports = router;