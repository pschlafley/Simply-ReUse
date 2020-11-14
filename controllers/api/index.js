const router = require('express').Router();

const userRoutes = require('./user-routes');

const postRoutes = require('./post-routes');

const commentRoutes = require('./comment-routes');

const likeRoutes = require('./like-routes');

const itemRoutes = require('./item-routes');

const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);

router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);

router.use('/likes', likeRoutes);

router.use('/items', itemRoutes);

router.use('/category', categoryRoutes);

module.exports = router;