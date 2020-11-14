const User = require('../models/User');
const sequelize = require('../config/connection');


const userData = [
  {
    username: "Peyton",
    email: "peyton@test.com",
    password: "test-1"
  },
  {
    username: "Brian",
    email: "brian@test.com",
    password: "test-2"
  },
  {
    username: "George",
    email: "George@test.com",
    password: "test-3"
  },
  {
    username: "Lucianne",
    email: "Lucianne@test.com",
    password: "test-4"
  },
  {
    username: "Dan",
    email: "dan@test.com",
    password: "test-5"
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return User.bulkCreate(userData);
  })
  .then(userData => {
    console.log('User seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });