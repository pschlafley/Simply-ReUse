const Comment = require('../models/Comment');
const sequelize = require('../config/connection');


const commentData = [
    {
        comment_text: "Comment Number 1!"
    },
    {
        comment_text: "Comment Number 2!" 
    },
    {
        comment_text: "Comment Number 3!"   
    },
    {
        comment_text: "Comment Number 4!"   
    },
    {
        comment_text: "Comment Number 5!"
    }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Comment.bulkCreate(commentData);
  })
  .then(commentData => {
    console.log('Comment seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });