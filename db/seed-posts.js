const Post = require('../models/Post');
const sequelize = require('../config/connection');


const postData = [
    {
        title: "This is the First Test",
        content: "Testing Number 1"
    },
    {
        title: "This is the Second Test",
        content: "Testing Number 2"
    },
    {
        title: "This is the Third Test",
        content: "Testing Number 3"
    },
    {
        title: "This is the Fourth Test",
        content: "Testing Number 4"
    },
    {
        title: "This is the Fith Test",
        content: "Testing Number 5"
    }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Post.bulkCreate(postData);
  })
  .then(postData => {
    console.log('Post seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });