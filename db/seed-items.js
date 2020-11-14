const Items = require('../models/Items');
const sequelize = require('../config/connection');


const itemsData = [
  {
    item_name: "plastic bottle"
  },
  {
    item_name: "pizza box"
  },
  {
    item_name: "wine bottle"
  },
  {
    item_name: "glass soda bottle"
  },
  {
    item_name: "soup can"
  },
  {
    item_name: "soda can"
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Items.bulkCreate(itemsData);
  })
  .then(itemsData => {
    console.log('Items seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });