const router = require('express').Router();
const { User, Post, Like, Comment } = require('../../models');


router.get('/', (req, res) => {
    Like.findAll({})
    .then(dbLikeData => res.json(dbLikeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


router.get('/:id', (req, res) => {
    Like.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbLikeData => {
        if(!dbLikeData){
            res.status(404).json({ message: 'No Likes found with that id' });
            return;
        }
        res.json(dbLikeData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}); 


router.post('/', (req, res) => {
    Like.create({
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(dbLikeData => res.json(dbLikeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


router.delete('/:id', (req, res) => {
    Like.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;