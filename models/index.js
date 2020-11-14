const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Like = require('./Like');
const Items = require('./Items')
const Category = require('./Category');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Like.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Like.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE'
// });

// Like.belongsTo(Comment, {
//     foreignKey: 'comment_id',
//     onDelete: 'CASCADE'
// });

// User.belongsToMany(Post, {
//     through: Like,
//     foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//     through: Like,
//     foreignKey: 'post_id'
// });

module.exports = { User, Post, Comment, Like, Items, Category };