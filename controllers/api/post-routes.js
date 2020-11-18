const router = require('express').Router();
const { User, Post, Like, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'content',
            'post_url',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username'],
            },
            // {
            //     model: Like,
            //     attributes: ['id', 'user_id', 'post_id'],
            //     include: [
            //         {
            //             model: User, 
            //             attributes: ['username']
            //         }
            //     ]
            // },
            {
                model: Comment,
                attributes: {
                    exclude: ['updatedAt', 'user_id', 'post_id']
                },
                include: [
                    {
                        model: User, 
                        attributes: ['id','username']
                    }
                ]
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}); 

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'content',
            'post_url',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Like,
                attributes: ['id', 'user_id', 'post_id'],
                include: [
                    {
                        model: User, 
                        attributes: ['username']
                    }
                ]
            },
            {
                model: Comment,
                attributes: {
                    exclude: ['updatedAt', 'user_id', 'post_id']
                },
                include: [
                    {
                        model: User, 
                        attributes: ['id','username']
                    }
                ]
            }
        ],
        attributes: {exclude: ['updatedAt', 'user_id']},
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({ message: 'No Posts found with that id' });
            return;
        }
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        post_url: req.body.post_url,
        user_id: req.body.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
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