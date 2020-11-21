const Items = require('../models/Items');
const sequelize = require('../config/connection');

const itemData = [
  {
    item_name: 'Automotive Bumpers',
     category_id: 1
  },
  {
    item_name: 'Oil Filters',
     category_id: 1
  },
  {
    item_name: 'ABS Plastic',
     category_id: 2
  },
  {
    item_name: 'AC Power Plugs',
     category_id: 2
  },
  {
    item_name: 'Amps',
     category_id: 3
  },
  {
    item_name: 'Blue Glass',
     category_id: 4
  },
  {
    item_name: 'Aerosol Spray Cans',
     category_id: 5
  },
  {
    item_name: 'Drink Boxes',
     category_id: 6
  },
  {
    item_name: 'Plastic Bottle',
     category_id: 7
  },
  {
    item_name: 'Degreaser',
     category_id: 8
  },
  {
    item_name: 'Hay',
     category_id: 9
  },
  {
    item_name: 'Baby Products',
     category_id: 10
  },
  {
    item_name: 'Christmas Trees',
     category_id: 11
  },
  {
    item_name: 'Energy Bar Wrappers',
     category_id: 12
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Items.bulkCreate(itemData);
  })
  .then(dbItemData => {
    console.log('Items seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
});