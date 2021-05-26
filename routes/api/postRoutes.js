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

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {id: req.params.id,},
    })
    .then((delPost) => {
        if(!req.params.id){
            res.status(404).json({message: 'Post not found'});
            return;
        }
        res.json(delPost);
    })
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then((updatePost) => {
        if(!req.params.id){
            res.status(404).json({message: 'Post not found'});
            return;
        }
        res.json(updatePost)
    })
    .catch((err) => res.status(400).json(err))
});

module.exports = router;