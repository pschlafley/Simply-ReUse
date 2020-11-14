const Like = require('../models/User');
const sequelize = require('../config/connection');


const likeData = [
    {
        "user_id": 1,
        "post_id": 1
    },
    {
        "user_id": 2,
        "post_id": 2
    },
    {
        "user_id": 3,
        "post_id": 3
    },
    {
        "user_id": 4,
        "post_id": 4
    },
    {   
        "user_id": 5,
        "post_id": 5
    }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Like.bulkCreate(likeData);
  })
  .then(likeData => {
    console.log('Like seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });