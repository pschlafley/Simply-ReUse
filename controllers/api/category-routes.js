const router = require('express').Router();
const { Items, Category } = require('../../models');

router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ],
        include: [{
            model: Items,
            attributes: ['item_name']
        }]
    })   
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:categories', (req, res) => {
    Category.findOne({
        where: {
            category_name: req.params.categories
        },
        attributes: [
            'id',
            'category_name'
        ],
        include: [{
            model: Items,
            attributes: ['item_name']
        }]
    })
    .then(dbCategoryData => {
        console.log(dbCategoryData);
        res.json(dbCategoryData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;