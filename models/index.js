const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Like = require('./Like');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
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

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


// Like.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Like.belongsTo(Post, {
//     foreignKey: 'post_id'
// });

// User.belongsToMany(Post, {
//     through: Like,
//     foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//     through: Like,
//     foreignKey: 'post_id'
// });

// Post.hasMany(Like, {
//     foreignKey: 'post_id'
// });

// User.hasMany(Like, {
//     foreignKey: 'user_id'
// });

module.exports = { User, Post, Comment, Like };