const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Like = require('./Like');
const Items = require('./Items')
const Category = require('./Category');

User.hasMany(Post, {
    foreignKey: 'user_id' 
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Like.belongsTo(User, {
    foreignKey: 'user_id'
});

Like.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.belongsToMany(Post, {
    through: Like,
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Like,
    foreignKey: 'post_id'
});

Post.hasMany(Like, {
    foreignKey: 'post_id'
});

User.hasMany(Like, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment, Like, Items, Category };