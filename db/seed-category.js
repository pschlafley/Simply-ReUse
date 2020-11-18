const Category = require('../models/Category');
const sequelize = require('../config/connection');

const categoryData = [
  {
    category_name: 'Automotive'
  },
  {
    category_name: 'Construction'
  },
  {
    category_name: 'Electronics'
  },
  {
    category_name: 'Glass'
  },
  {
    category_name: 'Metal'
  },
  {
    category_name: 'Paper'
  },
  {
    category_name: 'Plastic'
  },
  {
    category_name: 'Hazardous'
  },
  {
    category_name: 'Organic Waste'
  },
  {
    category_name: 'Household'
  },
  {
    category_name: 'Holiday'
  },
  {
    category_name: 'Packaging'
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Category.bulkCreate(categoryData);
  })
  .then(dbCategoryData => {
    console.log('Cateogies seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
});