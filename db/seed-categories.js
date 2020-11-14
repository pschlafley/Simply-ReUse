const Category = require('../models/Category');
const sequelize = require('../config/connection');


const categoryData = [
  {
    category_name: "Waste Paper/Cardboard"
  },
  {
    category_name: "Plastic"
  },
  {
    category_name: "Metal"
  },
  {
    category_name: "Electronics"
  },
  {
    category_name: "Wood"
  },
  {
    category_name: "Glass"
  },
  {
    category_name: "Clothing/Textile"
  },
  {
    category_name: "Bricks and Inert Waste"
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Category.bulkCreate(categoryData);
  })
  .then(categoryData => {
    console.log('Categories seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });